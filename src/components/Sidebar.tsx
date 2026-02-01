import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: "Home", label: "Главная", badge: null },
    { path: "/course/1", icon: "BookOpen", label: "Курсы", badge: null },
    { path: "/assignments", icon: "FileCheck", label: "Задания", badge: 28 },
    { path: "/communications", icon: "MessageSquare", label: "Сообщения", badge: 3 },
    { path: "/analytics", icon: "BarChart3", label: "Аналитика", badge: null },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-slate-200 h-screen sticky top-0">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Icon name="GraduationCap" className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-800">EduFlow LMS</h1>
            <p className="text-xs text-slate-500">Панель преподавателя</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? "default" : "ghost"}
            className={`w-full justify-start ${isActive(item.path) ? "bg-blue-500 text-white hover:bg-blue-600" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <Icon name={item.icon as any} size={20} className="mr-3" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <Badge variant={isActive(item.path) ? "secondary" : "default"} className="ml-2">
                {item.badge}
              </Badge>
            )}
          </Button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
          <Avatar>
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              ПП
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 truncate">Преподаватель</p>
            <p className="text-xs text-slate-500 truncate">teacher@school.ru</p>
          </div>
          <Button variant="ghost" size="icon">
            <Icon name="Settings" size={18} />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
