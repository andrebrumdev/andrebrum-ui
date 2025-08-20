// src/shared/utils/tailwind.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/input.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn("", className),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/inputs/InputLayout.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var layoutInput = `
            bg-input border-border flex items-center px-4 py-2 min-h-13 w-full rounded-md  border text-base transition-colors
            file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
            placeholder:text-muted-foreground
            focus-within:ring-2 focus-within:ring-ring focus-within:border-ring
            disabled:cursor-not-allowed disabled:opacity-50 
            md:text-sm gap-2
        `;
var InputLayout = ({
  RightIcon,
  LeftIcon,
  className,
  classNameInput,
  placeholder,
  ...propsInput
}) => {
  return /* @__PURE__ */ jsxs("label", { className: cn(layoutInput, className), children: [
    LeftIcon,
    /* @__PURE__ */ jsx2(
      Input,
      {
        type: "text",
        id: "username",
        placeholder,
        className: cn("flex-1 focus-visible:outline-none", classNameInput),
        ...propsInput
      }
    ),
    RightIcon
  ] });
};

// src/components/inputs/FieldReadonly.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function FieldReadonly({
  label,
  value,
  description,
  required,
  classNameWrapper,
  as,
  ...props
}) {
  const Comp = as || InputLayout;
  return /* @__PURE__ */ jsxs2("div", { className: cn("space-y-2 flex flex-col gap-1", classNameWrapper), children: [
    label && /* @__PURE__ */ jsx3(
      "div",
      {
        className: "text-sm font-medium text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-1 after:text-destructive data-[required=true]:after:content-['*']",
        "data-required": required,
        children: label
      }
    ),
    /* @__PURE__ */ jsx3(Comp, { value, readOnly: true, ...props }),
    description && /* @__PURE__ */ jsx3("div", { className: cn("text-[0.8rem] text-muted-foreground"), children: description })
  ] });
}

// src/components/ui/accordion.tsx
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React2 from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx4(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs3(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx4(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx4(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx4("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ui/checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React3 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Checkbox = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer size-4 shrink-0 rounded-[2px] border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx5(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx5(Check, { className: "size-3 stroke-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/textarea.tsx
import * as React4 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Textarea = React4.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx6(
    "textarea",
    {
      className: cn(
        "flex  w-full rounded-md border border-border bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm   focus-within:border-ring",
        "field-sizing-content max-h-29.5 resize-none min-h-30 px-4 py-2 bg-input",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";

// src/pages/print.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var Direction = /* @__PURE__ */ ((Direction2) => {
  Direction2["INBOUND"] = "Inbound";
  Direction2["OUTBOUND"] = "Outbound";
  return Direction2;
})(Direction || {});
var InfracaoPagePrint = ({
  data
}) => {
  return /* @__PURE__ */ jsxs4("html", { children: [
    /* @__PURE__ */ jsxs4("head", { children: [
      /* @__PURE__ */ jsx7("meta", { charSet: "UTF-8" }),
      /* @__PURE__ */ jsx7("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ jsx7("script", { src: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" })
    ] }),
    /* @__PURE__ */ jsx7("body", { children: /* @__PURE__ */ jsxs4("table", { className: "bg-white portrait-print ", children: [
      /* @__PURE__ */ jsx7("thead", { className: "border-b border-[#757E80]", children: /* @__PURE__ */ jsx7("tr", { children: /* @__PURE__ */ jsx7(
        "th",
        {
          colSpan: 12,
          className: "text-left text-xl text-[#757E80] py-2",
          children: /* @__PURE__ */ jsxs4("div", { className: "flex flex-row justify-between", children: [
            /* @__PURE__ */ jsx7("span", { children: /* @__PURE__ */ jsx7(
              "img",
              {
                src: "/images/logo-pdf.png",
                alt: "logo SGTU",
                className: "h-5"
              }
            ) }),
            /* @__PURE__ */ jsx7("span", { children: "Auto de infra\xE7\xE3o" })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsx7("tbody", { children: /* @__PURE__ */ jsx7("tr", { children: /* @__PURE__ */ jsx7("td", { children: /* @__PURE__ */ jsxs4(
        Accordion,
        {
          type: "multiple",
          className: "space-y-4 py-4 px-0 ",
          value: Array.from({ length: 6 }, (_, i) => `item-${i + 1}`),
          children: [
            /* @__PURE__ */ jsxs4("h1", { className: "text-xl text-[#757E80]", children: [
              "N\xBA do Auto: ",
              data?.id?.toString()?.padStart(6, "0")
            ] }),
            /* @__PURE__ */ jsxs4(
              AccordionItem,
              {
                value: "item-1",
                className: "space-y-5  border-none",
                children: [
                  /* @__PURE__ */ jsx7("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Auto de Infra\xE7\xE3o" }),
                  /* @__PURE__ */ jsxs4(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-4", children: [
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Modal",
                        value: data?.vehicle?.modal?.name,
                        classNameWrapper: "!col-span-full"
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "N\xBA Ordem",
                        value: data?.vehicle?.numOrder
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "N\xBA Linha",
                        value: data?.vehicle?.numLine
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Placa",
                        value: data?.vehicle?.licensePlate
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Marca",
                        value: data?.vehicle?.mark
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Modelo",
                        value: data?.vehicle?.model
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Propriet\xE1rio",
                        value: data?.vehicle?.owner
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs4(
              AccordionItem,
              {
                value: "item-2",
                className: "space-y-5 border-none",
                children: [
                  /* @__PURE__ */ jsx7("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Identifica\xE7\xE3o do Local da Infra\xE7\xE3o" }),
                  /* @__PURE__ */ jsxs4(AccordionContent, { className: "grid grid-cols-12 gap-4 *:col-span-4", children: [
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Data",
                        value: new Date(data?.date ?? "").toLocaleDateString()
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Hora Inicial",
                        value: data?.startTime
                      }
                    ),
                    /* @__PURE__ */ jsx7(FieldReadonly, { label: "Hora Final", value: data?.endTime }),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Local da Infra\xE7\xE3o",
                        value: data?.location,
                        classNameWrapper: "!col-span-6"
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Bairro",
                        value: data?.neighborhood,
                        classNameWrapper: "!col-span-6"
                      }
                    ),
                    /* @__PURE__ */ jsxs4("div", { className: "!col-span-full flex flex-row gap-4 *:inline-flex *:gap-1 *:items-center", children: [
                      /* @__PURE__ */ jsxs4("span", { children: [
                        /* @__PURE__ */ jsx7(
                          Checkbox,
                          {
                            checked: data?.direction === "Outbound" /* OUTBOUND */
                          }
                        ),
                        "Bairro / Centro"
                      ] }),
                      /* @__PURE__ */ jsxs4("span", { children: [
                        /* @__PURE__ */ jsx7(
                          Checkbox,
                          {
                            checked: data?.direction === "Inbound" /* INBOUND */
                          }
                        ),
                        "Centro / Bairro"
                      ] })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs4(
              AccordionItem,
              {
                value: "item-3",
                className: "space-y-5 border-none",
                children: [
                  /* @__PURE__ */ jsx7("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Identifica\xE7\xE3o da Infra\xE7\xE3o" }),
                  /* @__PURE__ */ jsxs4(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2  *:col-span-4", children: [
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Lei N\xBA",
                        value: data?.vehicle?.numLine
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Artigo",
                        value: data?.vehicle?.numLine
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Inciso",
                        value: data?.vehicle?.numLine
                      }
                    ),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Qtd. UFM",
                        value: data?.vehicle?.numLine,
                        classNameWrapper: "!col-span-3"
                      }
                    ),
                    /* @__PURE__ */ jsxs4("div", { className: "!col-span-9 flex flex-row gap-4 items-end *:inline-flex *:gap-1 *:items-center", children: [
                      /* @__PURE__ */ jsx7("span", { children: "Medida Adm.:" }),
                      /* @__PURE__ */ jsxs4("span", { children: [
                        /* @__PURE__ */ jsx7(
                          Checkbox,
                          {
                            checked: data?.direction === "Outbound" /* OUTBOUND */
                          }
                        ),
                        "Apreens\xE3o"
                      ] }),
                      /* @__PURE__ */ jsxs4("span", { children: [
                        /* @__PURE__ */ jsx7(
                          Checkbox,
                          {
                            checked: data?.direction === "Inbound" /* INBOUND */
                          }
                        ),
                        "Reten\xE7\xE3o"
                      ] })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs4(
              AccordionItem,
              {
                value: "item-4",
                className: "space-y-5 border-none",
                children: [
                  /* @__PURE__ */ jsx7("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Ci\xEAncia e Prazo" }),
                  /* @__PURE__ */ jsxs4(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-4", children: [
                    /* @__PURE__ */ jsx7("p", { className: "!col-span-full text-primary", children: "Vossa Senhoria fica ciente de que, por for\xE7a da Lei acima mencionada lhe \xE9 facultada a possibilidade de interpola\xE7\xE3o de recurso administrativo, no prazo de 15 (quinze) dias, a contar da data de ci\xEAncia deste auto de infra\xE7\xE3o." }),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Autuado",
                        value: data?.vehicle?.owner,
                        classNameWrapper: "!col-span-full"
                      }
                    ),
                    /* @__PURE__ */ jsxs4("div", { className: "space-y-2 flex flex-col gap-1 !col-span-full", children: [
                      /* @__PURE__ */ jsx7("div", { className: "text-sm font-medium text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Assinatura do Autuado" }),
                      /* @__PURE__ */ jsx7("div", { className: "w-full border rounded-xl overflow-hidden h-40 bg-white", children: /* @__PURE__ */ jsx7(
                        "img",
                        {
                          className: "object-contain h-full w-full",
                          src: data?.signature?.fileName,
                          alt: data?.signature?.originalName
                        }
                      ) })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs4(
              AccordionItem,
              {
                value: "item-5",
                className: "space-y-5 border-none",
                children: [
                  /* @__PURE__ */ jsx7("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Identifica\xE7\xE3o do Fiscal" }),
                  /* @__PURE__ */ jsxs4(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-6", children: [
                    /* @__PURE__ */ jsx7(FieldReadonly, { label: "Nome", value: data?.user?.name }),
                    /* @__PURE__ */ jsx7(
                      FieldReadonly,
                      {
                        label: "Matr\xEDcula",
                        value: data?.user?.id.toString().padStart(4, "0")
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs4(
              AccordionItem,
              {
                value: "item-6",
                className: "space-y-5 border-none",
                children: [
                  /* @__PURE__ */ jsx7("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Observa\xE7\xF5es" }),
                  /* @__PURE__ */ jsx7(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-full", children: /* @__PURE__ */ jsx7(
                    FieldReadonly,
                    {
                      label: "Observa\xE7\xF5es",
                      value: data?.observation,
                      as: Textarea
                    }
                  ) })
                ]
              }
            )
          ]
        }
      ) }) }) })
    ] }) })
  ] });
};
export {
  Direction,
  InfracaoPagePrint
};
//# sourceMappingURL=index.mjs.map