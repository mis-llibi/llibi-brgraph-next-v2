"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import axios from "@/lib/axios";

interface Client {
  id: number;
  clientName: string;
  description: string | null;
  insurerId: number | null;
  insurerName: string;
}

interface Insurer {
  id: number;
  name: string;
  clientsCount: number;
}

interface FormData {
  clientName: string;
  description: string;
  insurerId: string;
}

export default function ClientManagementPage() {
  const { data: session, status } = useSession();
  const [clients, setClients] = useState<Client[]>([]);
  const [insurers, setInsurers] = useState<Insurer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInsurer, setSelectedInsurer] = useState<string>("");

  // Modal states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  // Form state
  const [formData, setFormData] = useState<FormData>({
    clientName: "",
    description: "",
    insurerId: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Fetch clients and insurers
  const fetchData = async () => {
    try {
      const [clientsResponse, insurersResponse] = await Promise.all([
        axios.get("client-management"),
        axios.get("insurers"),
      ]);

      setClients(clientsResponse.data.clients);
      setInsurers(insurersResponse.data.insurers);
      setError(null);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error || "Failed to fetch data"
          : "Failed to fetch data";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchData();
    }
  }, [status]);

  // Redirect if not authenticated
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") redirect("/");

  // Check permissions
  if (session?.user && !session.user.admin && !session.user.superAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600">
            You don&apos;t have permission to access client management.
          </p>
        </div>
      </div>
    );
  }

  // Handle create client
  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post("client-management", {
        clientName: formData.clientName,
        description: formData.description || null,
        insurerId: formData.insurerId ? parseInt(formData.insurerId) : null,
      });

      if (response.data.success) {
        await fetchData();
        setShowCreateModal(false);
        resetForm();
        alert("Client created successfully!");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error || "Failed to create client"
          : "Failed to create client";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle edit client
  const handleEditClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClient) return;

    setSubmitting(true);

    try {
      const response = await axios.put(
        `client-management/${selectedClient.id}`,
        {
          clientName: formData.clientName,
          description: formData.description || null,
          insurerId: formData.insurerId ? parseInt(formData.insurerId) : null,
        }
      );

      if (response.data.success) {
        await fetchData();
        setShowEditModal(false);
        setSelectedClient(null);
        resetForm();
        alert("Client updated successfully!");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error || "Failed to update client"
          : "Failed to update client";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle delete client
  const handleDeleteClient = async () => {
    if (!selectedClient) return;

    setSubmitting(true);

    try {
      const response = await axios.delete(
        `client-management/${selectedClient.id}`
      );

      if (response.data.success) {
        await fetchData();
        setShowDeleteModal(false);
        setSelectedClient(null);
        alert("Client deleted successfully!");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && "response" in err
          ? (err as { response?: { data?: { error?: string } } }).response?.data
              ?.error || "Failed to delete client"
          : "Failed to delete client";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  // Open edit modal
  const openEditModal = (client: Client) => {
    setSelectedClient(client);
    setFormData({
      clientName: client.clientName,
      description: client.description || "",
      insurerId: client.insurerId?.toString() || "",
    });
    setShowEditModal(true);
  };

  // Open delete modal
  const openDeleteModal = (client: Client) => {
    setSelectedClient(client);
    setShowDeleteModal(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      clientName: "",
      description: "",
      insurerId: "",
    });
  };

  // Filter clients based on search and insurer selection
  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.insurerName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesInsurer =
      !selectedInsurer || client.insurerId?.toString() === selectedInsurer;

    return matchesSearch && matchesInsurer;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Client Management
                </h1>
                <p className="text-gray-600">
                  Manage your organization&apos;s clients
                </p>
              </div>
              {(session?.user?.canCreate || session?.user?.superAdmin) && (
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add New Client
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Search Clients
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name, description, or insurer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="insurer-filter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Filter by Insurer
                </label>
                <select
                  id="insurer-filter"
                  value={selectedInsurer}
                  onChange={(e) => setSelectedInsurer(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Insurers</option>
                  {insurers.map((insurer) => (
                    <option key={insurer.id} value={insurer.id}>
                      {insurer.name} ({insurer.clientsCount} clients)
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="px-6 py-4 bg-red-50 border-l-4 border-red-400">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Clients Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Insurer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredClients.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      {clients.length === 0
                        ? "No clients found"
                        : "No clients match your search criteria"}
                    </td>
                  </tr>
                ) : (
                  filteredClients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {client.clientName}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {client.description || "-"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {client.insurerName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        {(session?.user?.canEdit ||
                          session?.user?.superAdmin) && (
                          <button
                            onClick={() => openEditModal(client)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Edit
                          </button>
                        )}
                        {(session?.user?.canRemove ||
                          session?.user?.superAdmin) && (
                          <button
                            onClick={() => openDeleteModal(client)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Results Summary */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600">
              Showing {filteredClients.length} of {clients.length} clients
            </p>
          </div>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Create New Client
              </h3>
              <form onSubmit={handleCreateClient}>
                <div className="mb-4">
                  <label
                    htmlFor="clientName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Client Name *
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    required
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData({ ...formData, clientName: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="insurerId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Insurer
                  </label>
                  <select
                    id="insurerId"
                    value={formData.insurerId}
                    onChange={(e) =>
                      setFormData({ ...formData, insurerId: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">No Insurer</option>
                    {insurers.map((insurer) => (
                      <option key={insurer.id} value={insurer.id}>
                        {insurer.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      resetForm();
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {submitting ? "Creating..." : "Create Client"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedClient && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Edit Client
              </h3>
              <form onSubmit={handleEditClient}>
                <div className="mb-4">
                  <label
                    htmlFor="editClientName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Client Name *
                  </label>
                  <input
                    type="text"
                    id="editClientName"
                    required
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData({ ...formData, clientName: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="editDescription"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="editDescription"
                    rows={3}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="editInsurerId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Insurer
                  </label>
                  <select
                    id="editInsurerId"
                    value={formData.insurerId}
                    onChange={(e) =>
                      setFormData({ ...formData, insurerId: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">No Insurer</option>
                    {insurers.map((insurer) => (
                      <option key={insurer.id} value={insurer.id}>
                        {insurer.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEditModal(false);
                      setSelectedClient(null);
                      resetForm();
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {submitting ? "Updating..." : "Update Client"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedClient && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Delete Client
              </h3>
              <p className="text-gray-600 mb-4">
                Are you sure you want to delete &quot;
                <strong>{selectedClient.clientName}</strong>&quot;?
              </p>
              <p className="text-sm text-red-600 mb-4">
                This action cannot be undone. The client can only be deleted if
                it has no associated data.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowDeleteModal(false);
                    setSelectedClient(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteClient}
                  disabled={submitting}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50"
                >
                  {submitting ? "Deleting..." : "Delete Client"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
