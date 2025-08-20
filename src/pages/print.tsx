import { FieldReadonly } from "@/components/inputs/FieldReadonly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import "./globals.css";
export enum Direction {
  INBOUND = "Inbound", // bairro centro
  OUTBOUND = "Outbound", // centro bairro
}

interface Infracao {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
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
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
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
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
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
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number;
}

interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
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
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  status: string;
}

export const InfracaoPagePrint = ({ data }: { data: Infracao }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body>
        <table className="bg-white portrait-print ">
          <thead className="border-b border-[#757E80]">
            <tr>
              <th
                colSpan={12}
                className="text-left text-xl text-[#757E80] py-2"
              >
                <div className="flex flex-row justify-between">
                  <span>
                    <img
                      src="data:image/png;base64,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"
                      alt="logo SGTU"
                      className="h-5"
                    />
                  </span>
                  <span>Auto de infração</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Accordion
                  type="multiple"
                  className="space-y-4 py-4 px-0 "
                  value={Array.from({ length: 6 }, (_, i) => `item-${i + 1}`)}
                >
                  {/* Número do Auto */}
                  <h1 className="text-xl text-[#757E80]">
                    Nº do Auto: {data?.id?.toString()?.padStart(6, "0")}
                  </h1>

                  {/* Identificação do Veículo */}
                  <AccordionItem
                    value="item-1"
                    className="space-y-5  border-none"
                  >
                    <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                      Auto de Infração
                    </div>
                    <AccordionContent className="grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-4">
                      <FieldReadonly
                        label="Modal"
                        value={data?.vehicle?.modal?.name}
                        classNameWrapper="!col-span-full"
                      />
                      {/* <FieldReadonly
                        label="Nº Ordem"
                        value={data?.vehicle?.numOrder}
                      /> */}
                      {/* <FieldReadonly
                        label="Nº Linha"
                        value={data?.vehicle?.numLine}
                      /> */}
                      <FieldReadonly
                        label="Placa"
                        value={data?.vehicle?.licensePlate}
                      />
                      <FieldReadonly
                        label="Marca"
                        value={data?.vehicle?.chassisBrand}
                      />
                      <FieldReadonly
                        label="Modelo"
                        value={data?.vehicle?.model}
                      />
                      <FieldReadonly
                        label="Proprietário"
                        value={data?.user?.name}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  {/* Local e Data */}
                  <AccordionItem
                    value="item-2"
                    className="space-y-5 border-none"
                  >
                    <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                      Identificação do Local da Infração
                    </div>
                    <AccordionContent className="grid grid-cols-12 gap-4 *:col-span-4">
                      <FieldReadonly
                        label="Data"
                        value={new Date(data?.date ?? "").toLocaleDateString()}
                      />
                      <FieldReadonly
                        label="Hora Inicial"
                        value={data?.startTime}
                      />
                      <FieldReadonly label="Hora Final" value={data?.endTime} />
                      <FieldReadonly
                        label="Local da Infração"
                        value={data?.location}
                        classNameWrapper="!col-span-6"
                      />

                      <FieldReadonly
                        label="Bairro"
                        value={data?.neighborhood}
                        classNameWrapper="!col-span-6"
                      />
                      <div className="!col-span-full flex flex-row gap-4 *:inline-flex *:gap-1 *:items-center">
                        <span>
                          <Checkbox
                            checked={data?.direction === Direction.OUTBOUND}
                          />
                          Bairro / Centro
                        </span>
                        <span>
                          <Checkbox
                            checked={data?.direction === Direction.INBOUND}
                          />
                          Centro / Bairro
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Assinatura */}
                  <AccordionItem
                    value="item-3"
                    className="space-y-5 border-none"
                  >
                    <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                      Identificação da Infração
                    </div>
                    <AccordionContent className="grid grid-cols-12 gap-y-4 gap-x-2  *:col-span-4">
                      {/* <FieldReadonly
                        label="Lei Nº"
                        value={data?.vehicle?.numLine}
                      />
                      <FieldReadonly
                        label="Artigo"
                        value={data?.vehicle?.numLine}
                      />
                      <FieldReadonly
                        label="Inciso"
                        value={data?.vehicle?.numLine}
                      />
                      <FieldReadonly
                        label="Qtd. UFM"
                        value={data?.vehicle?.numLine}
                        classNameWrapper="!col-span-3"
                      /> */}

                      <div className="!col-span-9 flex flex-row gap-4 items-end *:inline-flex *:gap-1 *:items-center">
                        <span>Medida Adm.:</span>
                        <span>
                          <Checkbox
                            checked={data?.direction === Direction.OUTBOUND}
                          />
                          Apreensão
                        </span>
                        <span>
                          <Checkbox
                            checked={data?.direction === Direction.INBOUND}
                          />
                          Retenção
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    className="space-y-5 border-none"
                  >
                    <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                      Ciência e Prazo
                    </div>
                    <AccordionContent className="grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-4">
                      <p className="!col-span-full text-primary">
                        Vossa Senhoria fica ciente de que, por força da Lei
                        acima mencionada lhe é facultada a possibilidade de
                        interpolação de recurso administrativo, no prazo de 15
                        (quinze) dias, a contar da data de ciência deste auto de
                        infração.
                      </p>
                      {/* <FieldReadonly
                        label="Autuado"
                        value={data?.vehicle?.owner}
                        classNameWrapper="!col-span-full"
                      /> */}
                      <div className="space-y-2 flex flex-col gap-1 !col-span-full">
                        <div className="text-sm font-medium text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Assinatura do Autuado
                        </div>
                        <div className="w-full border rounded-xl overflow-hidden h-40 bg-white">
                          <img
                            className="object-contain h-full w-full"
                            src={data?.signature?.fileName}
                            alt={data?.signature?.originalName}
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="space-y-5 border-none"
                  >
                    <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                      Identificação do Fiscal
                    </div>
                    <AccordionContent className="grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-6">
                      <FieldReadonly label="Nome" value={data?.user?.name} />
                      <FieldReadonly
                        label="Matrícula"
                        value={data?.user?.id.toString().padStart(4, "0")}
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-6"
                    className="space-y-5 border-none"
                  >
                    <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                      Observações
                    </div>
                    <AccordionContent className="grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-full">
                      <FieldReadonly
                        label="Observações"
                        value={data?.observation}
                        as={Textarea}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
};
