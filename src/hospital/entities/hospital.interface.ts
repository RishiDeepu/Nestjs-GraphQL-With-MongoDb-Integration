export interface IHospital
{
  name:string,
  email:string,
  place:string,
  phonNo:string

}
export interface IHospitalDoc extends IHospital,Document{}