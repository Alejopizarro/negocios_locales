const Footer = () => {
  return (
    <div className="bg-slate-50 text-center">
      <ul className=" max-w-4xl mx-auto flex items-center w-full justify-center py-8 border-t border-gray-300">
        <li className="px-2 text-sm text-gray-600 hover:text-gray-950">
          politica de privacidad
        </li>
        <li className="px-2 text-sm text-gray-600 hover:text-gray-950 border-x-1 border-gray-950/80">
          aviso legal
        </li>
        <li className="px-2 text-sm text-gray-600 hover:text-gray-950 ">
          politica de cookies
        </li>
      </ul>
    </div>
  );
};

export default Footer;
