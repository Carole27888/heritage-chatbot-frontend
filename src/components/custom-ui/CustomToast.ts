

type ToastType = "success" | "error" | "info" | "warning";


export default function customToast(
  type: ToastType,
  title: string,
  description?: string
) {
  const message = `[${type.toUpperCase()}] ${title}${
    description ? " - " + description : ""
  }`;

  
  console.log(message);

}
