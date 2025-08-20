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
                src: "data:image/png;base64,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",
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