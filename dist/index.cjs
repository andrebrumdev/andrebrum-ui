"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Direction: () => Direction,
  InfracaoPagePrint: () => InfracaoPagePrint
});
module.exports = __toCommonJS(index_exports);

// src/shared/utils/tailwind.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/input.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: cn(layoutInput, className), children: [
    LeftIcon,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: cn("space-y-2 flex flex-col gap-1", classNameWrapper), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: "text-sm font-medium text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:ml-1 after:text-destructive data-[required=true]:after:content-['*']",
        "data-required": required,
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Comp, { value, readOnly: true, ...props }),
    description && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn("text-[0.8rem] text-muted-foreground"), children: description })
  ] });
}

// src/components/ui/accordion.tsx
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_lucide_react = require("lucide-react");
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ui/checkbox.tsx
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"), 1);
var import_lucide_react2 = require("lucide-react");
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var Checkbox = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer size-4 shrink-0 rounded-[2px] border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react2.Check, { className: "size-3 stroke-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/textarea.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var Textarea = React4.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_jsx_runtime7 = require("react/jsx-runtime");
var Direction = /* @__PURE__ */ ((Direction2) => {
  Direction2["INBOUND"] = "Inbound";
  Direction2["OUTBOUND"] = "Outbound";
  return Direction2;
})(Direction || {});
var InfracaoPagePrint = ({
  data
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("table", { className: "bg-white portrait-print ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("thead", { className: "border-b border-[#757E80]", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("th", { colSpan: 12, className: "text-left text-xl text-[#757E80] py-2", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-row justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "img",
        {
          src: "/images/logo-pdf.png",
          alt: "logo SGTU",
          className: "h-5"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Auto de infra\xE7\xE3o" })
    ] }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      Accordion,
      {
        type: "multiple",
        className: "space-y-4 py-4 px-0 ",
        value: Array.from({ length: 6 }, (_, i) => `item-${i + 1}`),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h1", { className: "text-xl text-[#757E80]", children: [
            "N\xBA do Auto: ",
            data?.id?.toString()?.padStart(6, "0")
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionItem, { value: "item-1", className: "space-y-5  border-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Auto de Infra\xE7\xE3o" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Modal",
                  value: data?.vehicle?.modal?.name,
                  classNameWrapper: "!col-span-full"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "N\xBA Ordem",
                  value: data?.vehicle?.numOrder
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "N\xBA Linha",
                  value: data?.vehicle?.numLine
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Placa",
                  value: data?.vehicle?.licensePlate
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FieldReadonly, { label: "Marca", value: data?.vehicle?.mark }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FieldReadonly, { label: "Modelo", value: data?.vehicle?.model }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Propriet\xE1rio",
                  value: data?.vehicle?.owner
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionItem, { value: "item-2", className: "space-y-5 border-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Identifica\xE7\xE3o do Local da Infra\xE7\xE3o" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionContent, { className: "grid grid-cols-12 gap-4 *:col-span-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Data",
                  value: new Date(data?.date ?? "").toLocaleDateString()
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FieldReadonly, { label: "Hora Inicial", value: data?.startTime }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FieldReadonly, { label: "Hora Final", value: data?.endTime }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Local da Infra\xE7\xE3o",
                  value: data?.location,
                  classNameWrapper: "!col-span-6"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Bairro",
                  value: data?.neighborhood,
                  classNameWrapper: "!col-span-6"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "!col-span-full flex flex-row gap-4 *:inline-flex *:gap-1 *:items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    Checkbox,
                    {
                      checked: data?.direction === "Outbound" /* OUTBOUND */
                    }
                  ),
                  "Bairro / Centro"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    Checkbox,
                    {
                      checked: data?.direction === "Inbound" /* INBOUND */
                    }
                  ),
                  "Centro / Bairro"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionItem, { value: "item-3", className: "space-y-5 border-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Identifica\xE7\xE3o da Infra\xE7\xE3o" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2  *:col-span-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Lei N\xBA",
                  value: data?.vehicle?.numLine
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Artigo",
                  value: data?.vehicle?.numLine
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Inciso",
                  value: data?.vehicle?.numLine
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Qtd. UFM",
                  value: data?.vehicle?.numLine,
                  classNameWrapper: "!col-span-3"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "!col-span-9 flex flex-row gap-4 items-end *:inline-flex *:gap-1 *:items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "Medida Adm.:" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    Checkbox,
                    {
                      checked: data?.direction === "Outbound" /* OUTBOUND */
                    }
                  ),
                  "Apreens\xE3o"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    Checkbox,
                    {
                      checked: data?.direction === "Inbound" /* INBOUND */
                    }
                  ),
                  "Reten\xE7\xE3o"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionItem, { value: "item-4", className: "space-y-5 border-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Ci\xEAncia e Prazo" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "!col-span-full text-primary", children: "Vossa Senhoria fica ciente de que, por for\xE7a da Lei acima mencionada lhe \xE9 facultada a possibilidade de interpola\xE7\xE3o de recurso administrativo, no prazo de 15 (quinze) dias, a contar da data de ci\xEAncia deste auto de infra\xE7\xE3o." }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Autuado",
                  value: data?.vehicle?.owner,
                  classNameWrapper: "!col-span-full"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-2 flex flex-col gap-1 !col-span-full", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-sm font-medium text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", children: "Assinatura do Autuado" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-full border rounded-xl overflow-hidden h-40 bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "img",
                  {
                    className: "object-contain h-full w-full",
                    src: data?.signature?.fileName,
                    alt: data?.signature?.originalName
                  }
                ) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionItem, { value: "item-5", className: "space-y-5 border-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Identifica\xE7\xE3o do Fiscal" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FieldReadonly, { label: "Nome", value: data?.user?.name }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                FieldReadonly,
                {
                  label: "Matr\xEDcula",
                  value: data?.user?.id.toString().padStart(4, "0")
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(AccordionItem, { value: "item-6", className: "space-y-5 border-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "border rounded text-primary p-2.5 border-[#C6D4D7] bg-[#F4F7F7]", children: "Observa\xE7\xF5es" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AccordionContent, { className: "grid grid-cols-12 gap-y-4 gap-x-2 *:col-span-full", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              FieldReadonly,
              {
                label: "Observa\xE7\xF5es",
                value: data?.observation,
                as: Textarea
              }
            ) })
          ] })
        ]
      }
    ) }) }) })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Direction,
  InfracaoPagePrint
});
//# sourceMappingURL=index.cjs.map