import { AlarmClock } from "lucide-react";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-6 py-12">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col items-center space-y-2 text-center">
            <AlarmClock className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">おはよう日記</h1>
            <p className="text-sm text-gray-500">新規アカウント登録</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
