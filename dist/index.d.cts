import * as react_jsx_runtime from 'react/jsx-runtime';

declare enum Direction {
    INBOUND = "Inbound",// bairro centro
    OUTBOUND = "Outbound"
}
declare const InfracaoPagePrint: ({ data, }: {
    data: {
        id: number;
        createdAt: string;
        updatedAt: string;
        deletedAt: null;
        date: string;
        startTime: string;
        endTime: string;
        neighborhood: string;
        location: string;
        observation: string;
        administrativeMeasure: string;
        direction: Direction;
        vehicle: {
            id: number;
            createdAt: string;
            updatedAt: string;
            deletedAt: null;
            licensePlate: string;
            chassis: string;
            year: string;
            numLine: string;
            numOrder: string;
            state: string;
            mark: string;
            model: string;
            owner: string;
            modal: {
                id: number;
                createdAt: string;
                updatedAt: string;
                deletedAt: null;
                name: string;
                description: null;
                recurrent: boolean;
                recurrenceRate: string;
                value: string;
                status: string;
                code: string;
            };
        };
        signature: {
            id: number;
            createdAt: string;
            updatedAt: string;
            deletedAt: null;
            fileName: string;
            originalName: string;
            mimeType: string;
            size: number;
        };
        user: {
            id: number;
            createdAt: string;
            updatedAt: string;
            deletedAt: null;
            name: string;
            email: string;
            phoneNumber: string;
            cpf: string;
            rg: string;
            birthdate: string;
            profile: string;
            address: null;
        };
    };
}) => react_jsx_runtime.JSX.Element;

export { Direction, InfracaoPagePrint };
