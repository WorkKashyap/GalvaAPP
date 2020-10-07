export class Purchase {
  id: number;
  plant:number;
  GRNNoMIGO: number;
  DateOfGRN: string;
  EntryNoMIRO: number;
  MIRODate: string;
  acDocumentNo: number;
  acDocumentDate: string;
  PODocType: string;
  poDocName: string;
  purchaseOrder: number;
  BusinessPartnerGroup: string;
  vendorCode: number;
  VendorName: string;
  vendorInvoiceNo: string;
  vendorInvoiceDate: string;
  GLCode: number;
  GLName: string;
  Narattion: string;
  Material: string;
  MaterialDescription: string;
  UnitOfMeasurement: string;
  MaterialQuantity: string;
  MaterialRate: string;
  materialValue: number;
  totalValue: number;
  netPayableToVendor: number;
  CostCentre: string;
  MaterialGroup: string;
  MaterialType: string;
  Cancellation: string;
  grouping:string;

  totalPurchase:number;
  materialQuantity:number;
  vendorName:string;
}
