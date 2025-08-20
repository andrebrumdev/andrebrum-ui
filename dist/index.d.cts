import * as react_jsx_runtime from 'react/jsx-runtime';

declare enum Direction {
    INBOUND = "Inbound",// bairro centro
    OUTBOUND = "Outbound"
}
interface Infracao {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    date: string;
    startTime: string;
    endTime: string;
    neighborhood: string;
    location: string;
    observation: string;
    administrativeMeasure: string;
    direction: string;
    status: string;
    latitude: number;
    longitude: number;
    vehicle: Vehicle;
    signature: Signature;
    user: User;
}
interface Vehicle {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    licensePlate: string;
    model: string;
    renavam: any;
    class: any;
    chassisNumber: any;
    chassisBrand: any;
    chassisModel: any;
    chassisYear: any;
    bodyworkBrand: any;
    bodyworkModel: any;
    bodyworkYear: any;
    federativeUnit: any;
    status: string;
    modal: Modal;
}
interface Modal {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    name: string;
    description: string;
    recurrent: boolean;
    recurrenceRate: any;
    value: any;
    status: string;
    code: string;
}
interface Signature {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    fileName: string;
    originalName: string;
    mimeType: string;
    size: number;
}
interface User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    name: string;
    email: string;
    phoneNumber: string;
    cpf: string;
    rg: any;
    birthdate: any;
    profile: string;
    licensee: Licensee;
    address: any;
}
interface Licensee {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    status: string;
}
declare const InfracaoPagePrint: ({ data }: {
    data: Infracao;
}) => react_jsx_runtime.JSX.Element;

export { Direction, InfracaoPagePrint };
