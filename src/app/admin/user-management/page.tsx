"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Modal from "@/components/Modal";
import LoadingSpinner from "@/components/LoadingSpinner";

interface User {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  superAdmin: boolean;
  canUpload: boolean;
  canCreate: boolean;
  canViewDeck: boolean;
  canUploadDeck: boolean;
  canAdd: boolean;
  canRemove: boolean;
  canEdit: boolean;
  isActive: boolean;
  mustChangePassword: boolean;
  lastLogin: string | null;
  createdAt: string;
  creator?: {
    name: string;
    email: string;
  };
}

interface CreateUserData {
  name: string;
  email: string;
  admin: boolean;
  canUpload: boolean;
  canCreate: boolean;
  canViewDeck: boolean;
  canUploadDeck: boolean;
  canAdd: boolean;
  canRemove: boolean;
  canEdit: boolean;
}

export default function UserManagementPage() {
  const { status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Form data
  const [formData, setFormData] = useState<CreateUserData>({
    name: "",
    email: "",
    admin: false,
    canUpload: false,
    canCreate: false,
    canViewDeck: false,
    canUploadDeck: false,
    canAdd: false,
    canRemove: false,
    canEdit: false,
  });

  const [submitting, setSubmitting] = useState(false);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/protected/user-management");
      setUsers(response.data.users);
      setError(null);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as any).response?.data?.error || "Failed to fetch users"
          : "Failed to fetch users";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchUsers();
    }
  }, [status]);

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      admin: false,
      canUpload: false,
      canCreate: false,
      canViewDeck: false,
      canUploadDeck: false,
      canAdd: false,
      canRemove: false,
      canEdit: false,
    });
  };

  // Handle create user
  const handleCreateUser = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        "/api/protected/user-management",
        formData
      );

      if (response.data.success) {
        await fetchUsers();
        setShowCreateModal(false);
        resetForm();
        alert(
          `User created successfully! Credentials sent to ${formData.email}`
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error || "Failed to create user"
          : "Failed to create user";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle edit user
  const handleEditUser = async () => {
    if (!selectedUser) return;

    setSubmitting(true);
    try {
      const response = await axios.put(
        `/api/protected/user-management/${selectedUser.id}`,
        formData
      );

      if (response.data.success) {
        await fetchUsers();
        setShowEditModal(false);
        setSelectedUser(null);
        resetForm();
        alert("User updated successfully!");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error || "Failed to update user"
          : "Failed to update user";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle delete user
  const handleDeleteUser = async () => {
    if (!selectedUser) return;

    setSubmitting(true);
    try {
      const response = await axios.delete(
        `/api/protected/user-management/${selectedUser.id}`
      );

      if (response.data.success) {
        await fetchUsers();
        setShowDeleteModal(false);
        setSelectedUser(null);
        alert("User deleted successfully!");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error || "Failed to delete user"
          : "Failed to delete user";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle reset password
  const handleResetPassword = async (userId: string, userName: string) => {
    if (
      !confirm(`Are you sure you want to reset the password for ${userName}?`)
    ) {
      return;
    }

    try {
      const response = await axios.post(
        `/api/protected/user-management/${userId}/reset-password`
      );

      if (response.data.success) {
        alert(
          `Password reset successfully! New credentials sent to user's email.`
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error || "Failed to reset password"
          : "Failed to reset password";
      alert(errorMessage);
    }
  };

  // Open edit modal
  const openEditModal = (user: User) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      admin: user.admin,
      canUpload: user.canUpload,
      canCreate: user.canCreate,
      canViewDeck: user.canViewDeck,
      canUploadDeck: user.canUploadDeck,
      canAdd: user.canAdd,
      canRemove: user.canRemove,
      canEdit: user.canEdit,
    });
    setShowEditModal(true);
  };

  // Open delete modal
  const openDeleteModal = (user: User) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  // Permission checkbox component
  const PermissionCheckbox = ({
    label,
    checked,
    onChange,
    description,
  }: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    description: string;
  }) => (
    <div className="flex items-start space-x-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <div>
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );

  if (status === "loading" || loading) {
    return <LoadingSpinner />;
  }

  if (status === "unauthenticated") {
    return <div>Access denied. Please log in.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New User
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role & Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      {user.lastLogin && (
                        <div className="text-xs text-gray-400">
                          Last login:{" "}
                          {new Date(user.lastLogin).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {user.admin ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Admin
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          User
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {user.canUpload && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Upload
                        </span>
                      )}
                      {user.canCreate && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          Create
                        </span>
                      )}
                      {user.canViewDeck && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                          View Deck
                        </span>
                      )}
                      {user.canUploadDeck && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                          Upload Deck
                        </span>
                      )}
                      {user.canAdd && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                          Add
                        </span>
                      )}
                      {user.canRemove && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                          Remove
                        </span>
                      )}
                      {user.canEdit && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                          Edit
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </span>
                      {user.mustChangePassword && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Must Change Password
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.creator ? (
                      <div>
                        <div>{user.creator.name}</div>
                        <div className="text-xs text-gray-500">
                          {user.creator.email}
                        </div>
                      </div>
                    ) : (
                      "System"
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => openEditModal(user)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleResetPassword(user.id, user.name)}
                      className="text-yellow-600 hover:text-yellow-900"
                    >
                      Reset Password
                    </button>
                    <button
                      onClick={() => openDeleteModal(user)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create User Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <div className="p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Create New User
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter user's full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter user's email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Role
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.admin}
                  onChange={(e) =>
                    setFormData({ ...formData, admin: e.target.checked })
                  }
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Admin
                  </label>
                  <p className="text-xs text-gray-500">
                    User can manage other users and access admin features
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Permissions
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PermissionCheckbox
                  label="Can Upload"
                  checked={formData.canUpload}
                  onChange={(checked) =>
                    setFormData({ ...formData, canUpload: checked })
                  }
                  description="Upload masterlist and utilization files"
                />
                <PermissionCheckbox
                  label="Can Create"
                  checked={formData.canCreate}
                  onChange={(checked) =>
                    setFormData({ ...formData, canCreate: checked })
                  }
                  description="Create new clients and records"
                />
                <PermissionCheckbox
                  label="Can View Deck"
                  checked={formData.canViewDeck}
                  onChange={(checked) =>
                    setFormData({ ...formData, canViewDeck: checked })
                  }
                  description="View deck files and reports"
                />
                <PermissionCheckbox
                  label="Can Upload Deck"
                  checked={formData.canUploadDeck}
                  onChange={(checked) =>
                    setFormData({ ...formData, canUploadDeck: checked })
                  }
                  description="Upload deck files"
                />
                <PermissionCheckbox
                  label="Can Add"
                  checked={formData.canAdd}
                  onChange={(checked) =>
                    setFormData({ ...formData, canAdd: checked })
                  }
                  description="Add new entries and data"
                />
                <PermissionCheckbox
                  label="Can Remove"
                  checked={formData.canRemove}
                  onChange={(checked) =>
                    setFormData({ ...formData, canRemove: checked })
                  }
                  description="Remove existing entries and data"
                />
                <PermissionCheckbox
                  label="Can Edit"
                  checked={formData.canEdit}
                  onChange={(checked) =>
                    setFormData({ ...formData, canEdit: checked })
                  }
                  description="Modify existing entries and data"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={() => setShowCreateModal(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              onClick={handleCreateUser}
              disabled={submitting || !formData.name || !formData.email}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded"
            >
              {submitting ? "Creating..." : "Create User"}
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit User Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <div className="p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Edit User: {selectedUser?.name}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter user's full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter user's email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Role
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.admin}
                  onChange={(e) =>
                    setFormData({ ...formData, admin: e.target.checked })
                  }
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Admin
                  </label>
                  <p className="text-xs text-gray-500">
                    User can manage other users and access admin features
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Permissions
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PermissionCheckbox
                  label="Can Upload"
                  checked={formData.canUpload}
                  onChange={(checked) =>
                    setFormData({ ...formData, canUpload: checked })
                  }
                  description="Upload masterlist and utilization files"
                />
                <PermissionCheckbox
                  label="Can Create"
                  checked={formData.canCreate}
                  onChange={(checked) =>
                    setFormData({ ...formData, canCreate: checked })
                  }
                  description="Create new clients and records"
                />
                <PermissionCheckbox
                  label="Can View Deck"
                  checked={formData.canViewDeck}
                  onChange={(checked) =>
                    setFormData({ ...formData, canViewDeck: checked })
                  }
                  description="View deck files and reports"
                />
                <PermissionCheckbox
                  label="Can Upload Deck"
                  checked={formData.canUploadDeck}
                  onChange={(checked) =>
                    setFormData({ ...formData, canUploadDeck: checked })
                  }
                  description="Upload deck files"
                />
                <PermissionCheckbox
                  label="Can Add"
                  checked={formData.canAdd}
                  onChange={(checked) =>
                    setFormData({ ...formData, canAdd: checked })
                  }
                  description="Add new entries and data"
                />
                <PermissionCheckbox
                  label="Can Remove"
                  checked={formData.canRemove}
                  onChange={(checked) =>
                    setFormData({ ...formData, canRemove: checked })
                  }
                  description="Remove existing entries and data"
                />
                <PermissionCheckbox
                  label="Can Edit"
                  checked={formData.canEdit}
                  onChange={(checked) =>
                    setFormData({ ...formData, canEdit: checked })
                  }
                  description="Modify existing entries and data"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={() => setShowEditModal(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              onClick={handleEditUser}
              disabled={submitting || !formData.name || !formData.email}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded"
            >
              {submitting ? "Updating..." : "Update User"}
            </button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <div className="p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Confirm Delete User
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Are you sure you want to delete{" "}
            <strong>{selectedUser?.name}</strong>? This action cannot be undone
            and will remove all user data and access.
          </p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteUser}
              disabled={submitting}
              className="bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-bold py-2 px-4 rounded"
            >
              {submitting ? "Deleting..." : "Delete User"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
