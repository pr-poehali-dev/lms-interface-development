import { useNavigate, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: "Home", label: "Главная", badge: null },
    { path: "/assignments", icon: "FileCheck", label: "Задания", badge: 28 },
    { path: "/communications", icon: "MessageSquare", label: "Чаты", badge: 3 },
    { path: "/analytics", icon: "BarChart3", label: "Аналитика", badge: null },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 shadow-lg">
      <div className="grid grid-cols-4 gap-1 p-2">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive(item.path)
                ? "bg-blue-500 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <div className="relative">
              <Icon name={item.icon as any} size={20} />
              {item.badge && !isActive(item.path) && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">{item.badge > 9 ? '9+' : item.badge}</span>
                </div>
              )}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
