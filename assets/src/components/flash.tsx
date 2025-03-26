import React from "react";
import { usePage } from "@inertiajs/react";
import { IconCheck, IconExclamationCircle } from "@tabler/icons-react";
import { toast } from "sonner";

export function Flash() {
  const { flash } = usePage()?.props as any;

  if (!flash) return null;

  React.useEffect(() => {
    if (flash?.error) {
      toast.error(flash?.error, {
        icon: <IconExclamationCircle />,
      });
    }

    if (flash?.success) {
      toast.success(flash?.success, {
        icon: <IconCheck />,
      });
    }
  }, [flash]);

  return <></>;
}
