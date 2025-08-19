import { FieldReadonly } from "@/components/inputs/FieldReadonly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
export enum Direction {
  INBOUND = "Inbound", // bairro centro
  OUTBOUND = "Outbound", // centro bairro
}
export const InfracaoPagePrint = ({
  data,
}: {
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
}) => {
  return (
    <table className="bg-white portrait-print ">
      <thead className="border-b border-[#757E80]">
        <tr>
          <th colSpan={12} className="text-left text-xl text-[#757E80] py-2">
            <div className="flex flex-row justify-between">
              <span>
                <img
                  src="/images/logo-pdf.png"
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
              <AccordionItem value="item-1" className="space-y-5  border-none">
                <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                  Auto de Infração
                </div>
                <AccordionContent className="grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-4">
                  <FieldReadonly
                    label="Modal"
                    value={data?.vehicle?.modal?.name}
                    classNameWrapper="!col-span-full"
                  />
                  <FieldReadonly
                    label="Nº Ordem"
                    value={data?.vehicle?.numOrder}
                  />
                  <FieldReadonly
                    label="Nº Linha"
                    value={data?.vehicle?.numLine}
                  />
                  <FieldReadonly
                    label="Placa"
                    value={data?.vehicle?.licensePlate}
                  />
                  <FieldReadonly label="Marca" value={data?.vehicle?.mark} />
                  <FieldReadonly label="Modelo" value={data?.vehicle?.model} />
                  <FieldReadonly
                    label="Proprietário"
                    value={data?.vehicle?.owner}
                  />
                </AccordionContent>
              </AccordionItem>

              {/* Local e Data */}
              <AccordionItem value="item-2" className="space-y-5 border-none">
                <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                  Identificação do Local da Infração
                </div>
                <AccordionContent className="grid grid-cols-12 gap-4 *:col-span-4">
                  <FieldReadonly
                    label="Data"
                    value={new Date(data?.date ?? "").toLocaleDateString()}
                  />
                  <FieldReadonly label="Hora Inicial" value={data?.startTime} />
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
              <AccordionItem value="item-3" className="space-y-5 border-none">
                <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                  Identificação da Infração
                </div>
                <AccordionContent className="grid grid-cols-12 gap-y-4 gap-x-2  *:col-span-4">
                  <FieldReadonly
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
                  />

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

              <AccordionItem value="item-4" className="space-y-5 border-none">
                <div className="border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]">
                  Ciência e Prazo
                </div>
                <AccordionContent className="grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-4">
                  <p className="!col-span-full text-primary">
                    Vossa Senhoria fica ciente de que, por força da Lei acima
                    mencionada lhe é facultada a possibilidade de interpolação
                    de recurso administrativo, no prazo de 15 (quinze) dias, a
                    contar da data de ciência deste auto de infração.
                  </p>
                  <FieldReadonly
                    label="Autuado"
                    value={data?.vehicle?.owner}
                    classNameWrapper="!col-span-full"
                  />
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

              <AccordionItem value="item-5" className="space-y-5 border-none">
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

              <AccordionItem value="item-6" className="space-y-5 border-none">
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
  );
};
