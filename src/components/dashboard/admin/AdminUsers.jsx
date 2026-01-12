
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Button } from '../../ui/Button';
import { useUser } from '../../../context/UserContext';
import { UserPlus, Edit2, Trash2, Search, Filter, Shield, AlertTriangle } from 'lucide-react';

const AdminUsers = () => {
    const { users, addUser, deleteUser, updateUser } = useUser();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'student', status: 'Active' });
    const [editingUser, setEditingUser] = useState(null);
    const [userToDelete, setUserToDelete] = useState(null);

    const filteredUsers = users.filter(u =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddUser = (e) => {
        e.preventDefault();
        addUser(newUser);
        setNewUser({ name: '', email: '', role: 'student', status: 'Active' });
        setIsAddModalOpen(false);
    };

    const openEditModal = (user) => {
        setEditingUser(user);
        setIsEditModalOpen(true);
    };

    const handleEditUser = (e) => {
        e.preventDefault();
        updateUser(editingUser.id, editingUser);
        setIsEditModalOpen(false);
    };

    const confirmDelete = (user) => {
        setUserToDelete(user);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteUser = () => {
        if (userToDelete) {
            deleteUser(userToDelete.id);
            setIsDeleteModalOpen(false);
            setUserToDelete(null);
        }
    };

    const handleResetPassword = (id) => {
        alert(`Password reset link sent to user ID: ${id}`);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header / Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">User Management</h2>
                    <p className="text-gray-400">Manage students, instructors, and admins.</p>
                </div>
                <Button onClick={() => setIsAddModalOpen(true)} variant="primary">
                    <UserPlus className="w-4 h-4 mr-2" /> Add New User
                </Button>
            </div>

            {/* Filters */}
            <GlassCard className="p-4 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full bg-[#0B1220] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-600 focus:border-primary focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* <Button variant="ghost" className="text-gray-400">
                    <Filter className="w-4 h-4 mr-2" /> Filter Role
                </Button> */}
            </GlassCard>

            {/* Table */}
            <GlassCard className="overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400 text-sm bg-white/5">
                                <th className="p-4 font-medium">User</th>
                                <th className="p-4 font-medium">Role</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Security</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map(u => (
                                <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white font-medium flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-xs font-bold ring-1 ring-white/10">
                                            {u.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-sm">{u.name}</div>
                                            <div className="text-xs text-gray-500">{u.email}</div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase border
                                            ${u.role === 'admin' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                u.role === 'instructor' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                                    'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${u.status === 'Active' ? 'text-green-400 bg-green-500/10' : 'text-gray-400 bg-gray-500/10'}`}>
                                            {u.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button onClick={() => handleResetPassword(u.id)} className="text-xs text-yellow-500 hover:text-yellow-400 underline decoration-dashed">
                                            Reset Password
                                        </button>
                                    </td>
                                    <td className="p-4 text-right flex justify-end gap-2">
                                        <button onClick={() => openEditModal(u)} className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => confirmDelete(u)} className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredUsers.length === 0 && (
                        <div className="p-8 text-center text-gray-500">No users found matching your search.</div>
                    )}
                </div>
            </GlassCard>

            {/* Add User Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <GlassCard className="w-full max-w-md p-8 relative animate-in zoom-in-95 duration-200 border-primary/20">
                        <h2 className="text-xl font-bold text-white mb-6">Create New User</h2>
                        <form onSubmit={handleAddUser} className="space-y-4">
                            <input
                                type="text" placeholder="Full Name" required
                                className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                            />
                            <input
                                type="email" placeholder="Email" required
                                className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                            />
                            <select
                                className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                            >
                                <option value="student">Student</option>
                                <option value="instructor">Instructor</option>
                                <option value="admin">Admin</option>
                            </select>
                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="ghost" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
                                <Button type="submit" variant="primary">Create User</Button>
                            </div>
                        </form>
                    </GlassCard>
                </div>
            )}

            {/* Edit User Modal */}
            {isEditModalOpen && editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <GlassCard className="w-full max-w-md p-8 relative animate-in zoom-in-95 duration-200 border-blue-500/20">
                        <h2 className="text-xl font-bold text-white mb-6">Edit User</h2>
                        <form onSubmit={handleEditUser} className="space-y-4">
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Full Name</label>
                                <input
                                    type="text" required
                                    className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                    value={editingUser.name} onChange={e => setEditingUser({ ...editingUser, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Email</label>
                                <input
                                    type="email" required readOnly
                                    className="w-full bg-[#0B1220]/50 border border-white/5 rounded-lg px-4 py-2 text-gray-400 cursor-not-allowed"
                                    value={editingUser.email}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-400 block mb-1">Role</label>
                                    <select
                                        className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                        value={editingUser.role} onChange={e => setEditingUser({ ...editingUser, role: e.target.value })}
                                    >
                                        <option value="student">Student</option>
                                        <option value="instructor">Instructor</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 block mb-1">Status</label>
                                    <select
                                        className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-2 text-white"
                                        value={editingUser.status} onChange={e => setEditingUser({ ...editingUser, status: e.target.value })}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Suspended">Suspended</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="ghost" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
                                <Button type="submit" variant="primary">Save Changes</Button>
                            </div>
                        </form>
                    </GlassCard>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && userToDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <GlassCard className="w-full max-w-sm p-6 relative animate-in zoom-in-95 duration-200 border-red-500/20 text-center">
                        <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Delete User?</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Are you sure you want to delete <strong>{userToDelete.name}</strong>? This action cannot be undone.
                        </p>
                        <div className="flex justify-center gap-3">
                            <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
                            <Button
                                onClick={handleDeleteUser}
                                className="bg-red-500 hover:bg-red-600 text-white"
                            >
                                Delete User
                            </Button>
                        </div>
                    </GlassCard>
                </div>
            )}
        </div>
    );
};

export default AdminUsers;
