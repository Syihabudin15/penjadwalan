export interface IMenu {
  id: number;
  nama: string;
  path: string;
  akses: string[];
  role_id: number;
}
export interface IRole {
  id: number;
  nama: string;
  menu: IMenu[];
}
export interface IBiodata {
  id: number;
  nama: string;
  jenis_kelamin: "L" | "P";
  agama: "ISLAM" | "HINDU" | "BUDHA" | "KATOLIK" | "PROTESTAN" | "KONGHUCU";
}
export interface IUser {
  id: number;
  email: string;
  role: IRole[];
  biodata: IBiodata;
}
