
import { toast as sonnerToast, ToastT } from "sonner";

type ToastProps = Omit<ToastT, "id">;

export function toast(props: ToastProps) {
  return sonnerToast(props);
}

export { toast as useToast };
