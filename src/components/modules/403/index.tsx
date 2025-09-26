import { Link } from "react-router-dom";

const ForbiddenPage = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1 className="text-4xl font-bold text-red-400">403 - Forbidden</h1>
      <p>Bạn không có quyền truy cập trang này.</p>
      <Link
        to="/"
        className="p-4 bg-primary mt-2 rounded-xl text-white inline-block"
      >
        Quay về trang chính
      </Link>
    </div>
  );
};

export default ForbiddenPage;
