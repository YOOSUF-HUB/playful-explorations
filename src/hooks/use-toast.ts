
import { toast as sonnerToast, type Toast as SonnerToast, useToast as useSonnerToast } from "sonner";

type ToastProps = Omit<SonnerToast, "id">;

export function toast(props: ToastProps) {
  return sonnerToast(props);
}

export { useSonnerToast as useToast };
