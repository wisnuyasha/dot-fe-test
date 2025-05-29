import { AuthMessage } from "@/types/auth";

interface FormMessageProps {
  message: AuthMessage;
}

export function FormMessage({ message }: FormMessageProps) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm mt-4">
      {"success" in message && (
        <div className="text-green-700 border-l-2 border-green-700 px-4">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <p className=" text-red-700 border-l-2 border-red-700 px-4">
          {message.error}
        </p>
      )}
      {"message" in message && (
        <div className="text-slate-950 border-l-2 px-4">{message.message}</div>
      )}
    </div>
  );
}
