export interface IEmployeeGetDTO {
  id: number;
  name: string;
  address: string;
  email: string;
  userName: string;
  password: string;
  phoneNumber: string;
  branchName: number;
  branchId: number;
  isActive?: boolean;
  isDeleted?: boolean;
}
