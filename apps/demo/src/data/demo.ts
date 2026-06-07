export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "active" | "inactive" | "pending";
  lastActive: string;
  department: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Alice Chen",
    email: "alice@example.com",
    role: "Admin",
    status: "active",
    lastActive: "2 min ago",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Bob Martinez",
    email: "bob@example.com",
    role: "Editor",
    status: "active",
    lastActive: "5 min ago",
    department: "Design",
  },
  {
    id: 3,
    name: "Carol Kim",
    email: "carol@example.com",
    role: "Viewer",
    status: "inactive",
    lastActive: "3 days ago",
    department: "Marketing",
  },
  {
    id: 4,
    name: "David Okafor",
    email: "david@example.com",
    role: "Editor",
    status: "active",
    lastActive: "1 hour ago",
    department: "Engineering",
  },
  {
    id: 5,
    name: "Eva Lindqvist",
    email: "eva@example.com",
    role: "Admin",
    status: "active",
    lastActive: "Just now",
    department: "Operations",
  },
  {
    id: 6,
    name: "Frank Dubois",
    email: "frank@example.com",
    role: "Viewer",
    status: "pending",
    lastActive: "Never",
    department: "Sales",
  },
  {
    id: 7,
    name: "Grace Tanaka",
    email: "grace@example.com",
    role: "Editor",
    status: "active",
    lastActive: "15 min ago",
    department: "Engineering",
  },
  {
    id: 8,
    name: "Hassan Ali",
    email: "hassan@example.com",
    role: "Viewer",
    status: "active",
    lastActive: "2 hours ago",
    department: "Support",
  },
  {
    id: 9,
    name: "Iris Novak",
    email: "iris@example.com",
    role: "Admin",
    status: "inactive",
    lastActive: "1 week ago",
    department: "Engineering",
  },
  {
    id: 10,
    name: "James Wright",
    email: "james@example.com",
    role: "Editor",
    status: "active",
    lastActive: "30 min ago",
    department: "Design",
  },
  {
    id: 11,
    name: "Kaya Petrov",
    email: "kaya@example.com",
    role: "Viewer",
    status: "pending",
    lastActive: "Never",
    department: "Marketing",
  },
  {
    id: 12,
    name: "Liam O'Brien",
    email: "liam@example.com",
    role: "Editor",
    status: "active",
    lastActive: "10 min ago",
    department: "Engineering",
  },
];

export interface Activity {
  id: number;
  user: string;
  action: string;
  resource: string;
  timestamp: string;
}

export const recentActivity: Activity[] = [
  {
    id: 1,
    user: "Alice Chen",
    action: "deployed",
    resource: "api-gateway v2.4.1",
    timestamp: "2 min ago",
  },
  {
    id: 2,
    user: "Bob Martinez",
    action: "updated",
    resource: "Dashboard layout",
    timestamp: "15 min ago",
  },
  {
    id: 3,
    user: "Eva Lindqvist",
    action: "created",
    resource: "New monitoring alert",
    timestamp: "1 hour ago",
  },
  {
    id: 4,
    user: "Grace Tanaka",
    action: "merged",
    resource: "PR #482 — Auth refactor",
    timestamp: "2 hours ago",
  },
  {
    id: 5,
    user: "David Okafor",
    action: "resolved",
    resource: "Issue #1024",
    timestamp: "3 hours ago",
  },
];

export const metrics = {
  totalUsers: 1284,
  activeProjects: 42,
  deployments: 186,
  uptime: 99.97,
};
