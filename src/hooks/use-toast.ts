
import { toast as sonnerToast, type ToastOptions, useToaster } from "sonner";

type ToastProps = ToastOptions;

export function toast(props: ToastProps) {
  return sonnerToast(props.title || "", props);
}

export { useToaster as useToast };
