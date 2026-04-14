"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import Modal from "@/components/Modal";

interface Admin {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  superAdmin: boolean;
  canAdd: boolean;
  canRemove: boolean;
  canEdit: boolean;
  isActive: boolean;
  lastLogin: string | null;
  createdAt: string;
  creator?: {
    name: string;
    email: string;
  };
}

interface AdminFormData {
  name: string;
  email: string;
  canAdd: boolean;
  canRemove: boolean;
  canEdit: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isActive: boolean;
}

export default function AdminManagementPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<
    "create" | "edit" | "delete" | "resetPassword"
  >("create");
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [formData, setFormData] = useState<AdminFormData>({
    name: "",
    email: "",
    canAdd: false,
    canRemove: false,
    canEdit: false,
    isAdmin: true,
    isSuperAdmin: false,
    isActive: true,
  });
  const [submitting, setSubmitting] = useState(false);

  // Redirect if not super admin
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
      return;
    }

    if (
      status === "authenticated" &&
      session?.user &&
      !session.user.superAdmin
    ) {
      router.push("/dashboard");
      return;
    }
  }, [session, status, router]);

  // Fetch admins
  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/protected/admin-management");

      if (!response.ok) {
        throw new Error("Failed to fetch administrators");
      }

      const data = await response.json();
      setAdmins(data.admins);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch administrators",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.superAdmin) {
      fetchAdmins();
    }
  }, [session]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const url =
        modalType === "create"
          ? "/api/protected/admin-management"
          : `/api/protected/admin-management/${selectedAdmin?.id}`;

      const method = modalType === "create" ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Operation failed");
      }

      await fetchAdmins();
      setShowModal(false);
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Operation failed");
    } finally {
      setSubmitting(false);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (!selectedAdmin) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/protected/admin-management/${selectedAdmin.id}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete administrator");
      }

      await fetchAdmins();
      setShowModal(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to delete administrator",
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Handle password reset
  const handleResetPassword = async () => {
    if (!selectedAdmin) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/protected/admin-management/${selectedAdmin.id}/reset-password`,
        {
          method: "POST",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password");
      }

      setShowModal(false);
      // Show success message or toast here
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reset password");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      canAdd: false,
      canRemove: false,
      canEdit: false,
      isAdmin: true,
      isSuperAdmin: false,
      isActive: true,
    });
    setSelectedAdmin(null);
  };

  const openModal = (type: typeof modalType, admin?: Admin) => {
    setModalType(type);
    if (admin) {
      setSelectedAdmin(admin);
      if (type === "edit") {
        setFormData({
          name: admin.name,
          email: admin.email,
          canAdd: admin.superAdmin ? true : admin.canAdd,
          canRemove: admin.superAdmin ? true : admin.canRemove,
          canEdit: admin.superAdmin ? true : admin.canEdit,
          isAdmin: admin.admin,
          isSuperAdmin: admin.superAdmin,
          isActive: admin.isActive,
        });
      }
    } else {
      resetForm();
    }
    setShowModal(true);
  };

  const renderModal = () => {
    if (modalType === "delete") {
      return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Delete Administrator
            </h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete{" "}
              <strong>{selectedAdmin?.name}</strong>? This action cannot be
              undone.
            </p>
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={submitting}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
              >
                {submitting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </Modal>
      );
    }

    if (modalType === "resetPassword") {
      return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Reset Password
            </h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to reset the password for{" "}
              <strong>{selectedAdmin?.name}</strong>? A new temporary password
              will be sent to their email.
            </p>
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                onClick={handleResetPassword}
                disabled={submitting}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-50"
              >
                {submitting ? "Resetting..." : "Reset Password"}
              </button>
            </div>
          </div>
        </Modal>
      );
    }

    return (
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {modalType === "create"
              ? "Create Administrator"
              : "Edit Administrator"}
          </h3>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-700">Permissions</h4>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isSuperAdmin}
                      onChange={(e) => {
                        const isSuperAdmin = e.target.checked;
                        setFormData({
                          ...formData,
                          isSuperAdmin,
                          canAdd: isSuperAdmin ? true : formData.canAdd,
                          canRemove: isSuperAdmin ? true : formData.canRemove,
                          canEdit: isSuperAdmin ? true : formData.canEdit,
                        });
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm">
                      Super Administrator (Full Access)
                    </span>
                  </label>
                  <p className="ml-6 text-xs text-gray-500">
                    Automatically enables Add, Remove, and Edit permissions.
                  </p>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.canAdd}
                      onChange={(e) =>
                        setFormData({ ...formData, canAdd: e.target.checked })
                      }
                      className="mr-2"
                      disabled={formData.isSuperAdmin}
                    />
                    <span className="text-sm">Can Add Users</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.canRemove}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          canRemove: e.target.checked,
                        })
                      }
                      className="mr-2"
                      disabled={formData.isSuperAdmin}
                    />
                    <span className="text-sm">Can Remove Users</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.canEdit}
                      onChange={(e) =>
                        setFormData({ ...formData, canEdit: e.target.checked })
                      }
                      className="mr-2"
                      disabled={formData.isSuperAdmin}
                    />
                    <span className="text-sm">Can Edit Users</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) =>
                        setFormData({ ...formData, isActive: e.target.checked })
                      }
                      className="mr-2"
                    />
                    <span className="text-sm">Active Account</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {submitting
                  ? "Saving..."
                  : modalType === "create"
                    ? "Create"
                    : "Update"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  };

  if (status === "loading") return <LoadingSpinner />;

  if (!session?.user?.superAdmin) {
    return <div className="p-6 text-center text-red-600">Access Denied</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Administrator Management
        </h1>
        <button
          onClick={() => openModal("create")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Administrator
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Administrator
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {admins.map((admin) => (
                <tr key={admin.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {admin.name}
                      </div>
                      <div className="text-sm text-gray-500">{admin.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        admin.superAdmin
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {admin.superAdmin ? "Super Admin" : "Admin"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {admin.superAdmin ? (
                      "Full Access"
                    ) : (
                      <div className="space-y-1">
                        {admin.canAdd && (
                          <div className="text-xs">• Add Users</div>
                        )}
                        {admin.canRemove && (
                          <div className="text-xs">• Remove Users</div>
                        )}
                        {admin.canEdit && (
                          <div className="text-xs">• Edit Users</div>
                        )}
                        {!admin.canAdd &&
                          !admin.canRemove &&
                          !admin.canEdit && (
                            <div className="text-xs text-gray-400">
                              No permissions
                            </div>
                          )}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        admin.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {admin.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {admin.lastLogin
                      ? new Date(admin.lastLogin).toLocaleDateString()
                      : "Never"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openModal("edit", admin)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal("resetPassword", admin)}
                        className="text-orange-600 hover:text-orange-900"
                      >
                        Reset Password
                      </button>
                      {admin.id !== parseInt(session.user.id || "0") && (
                        <button
                          onClick={() => openModal("delete", admin)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {renderModal()}
    </div>
  );
}
