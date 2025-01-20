export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    fill?: boolean;
  }[];
}

export interface TableData {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  role: string;
  lastActive: string;
}

export interface SidebarItem {
  title: string;
  icon: string;
  path: string;
  children?: Omit<SidebarItem, 'children'>[];
}