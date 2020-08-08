export class Item {
  constructor(
    public produto?: string,
    public variedade?: string,
    public pais?: string,
    public categoria?: string,
    public safra?: number,
    public preco?: number
  ) {}

  static fromJson(jsonData:any){
    return Object.assign(new Item(), jsonData);
  }
}
