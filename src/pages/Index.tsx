import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState("10-А");

  const announcements = [
    { 
      id: 1, 
      title: "Контрольная работа по алгебре", 
      description: "15 февраля в 10:00. Темы: квадратные уравнения, системы уравнений",
      type: "important",
      date: "15.02.2026",
      group: "10-А"
    },
    { 
      id: 2, 
      title: "Родительское собрание", 
      description: "Онлайн-встреча 20 февраля в 18:00. Ссылка будет отправлена за день",
      type: "event",
      date: "20.02.2026",
      group: "10-А"
    },
    { 
      id: 3, 
      title: "Домашнее задание до 10.02", 
      description: "Параграф 12, упражнения 45-52. Принести циркуль на следующий урок",
      type: "homework",
      date: "10.02.2026",
      group: "10-А"
    },
  ];

  const schedule = [
    { id: 1, time: "09:00 - 09:45", subject: "Математика", group: "10-А", room: "Кабинет 205", day: "Понедельник" },
    { id: 2, time: "10:00 - 10:45", subject: "Алгебра", group: "9-Б", room: "Кабинет 205", day: "Понедельник" },
    { id: 3, time: "11:00 - 11:45", subject: "Геометрия", group: "11-А", room: "Кабинет 205", day: "Понедельник" },
    { id: 4, time: "14:00 - 14:45", subject: "Математика", group: "10-А", room: "Кабинет 205", day: "Понедельник" },
  ];

  const todaySchedule = [
    { id: 1, time: "09:00", subject: "Математика", group: "10-А", room: "205", status: "completed" },
    { id: 2, time: "10:00", subject: "Алгебра", group: "9-Б", room: "205", status: "completed" },
    { id: 3, time: "11:00", subject: "Геометрия", group: "11-А", room: "205", status: "current" },
    { id: 4, time: "14:00", subject: "Математика", group: "10-А", room: "205", status: "upcoming" },
  ];

  const students = [
    { 
      id: 1, 
      name: "Алексей Иванов", 
      email: "a.ivanov@school.ru",
      phone: "+7 (999) 123-45-67",
      attendance: 95, 
      avgGrade: 4.8, 
      status: "active",
      lastActivity: "2 часа назад"
    },
    { 
      id: 2, 
      name: "Мария Петрова", 
      email: "m.petrova@school.ru",
      phone: "+7 (999) 234-56-78",
      attendance: 98, 
      avgGrade: 4.9, 
      status: "active",
      lastActivity: "1 час назад"
    },
    { 
      id: 3, 
      name: "Дмитрий Сидоров", 
      email: "d.sidorov@school.ru",
      phone: "+7 (999) 345-67-89",
      attendance: 87, 
      avgGrade: 4.2, 
      status: "warning",
      lastActivity: "1 день назад"
    },
    { 
      id: 4, 
      name: "Елена Кузнецова", 
      email: "e.kuznetsova@school.ru",
      phone: "+7 (999) 456-78-90",
      attendance: 100, 
      avgGrade: 5.0, 
      status: "active",
      lastActivity: "30 минут назад"
    },
    { 
      id: 5, 
      name: "Артём Смирнов", 
      email: "a.smirnov@school.ru",
      phone: "+7 (999) 567-89-01",
      attendance: 72, 
      avgGrade: 3.8, 
      status: "attention",
      lastActivity: "3 дня назад"
    },
  ];

  const tasks = [
    { 
      id: 1, 
      title: "Контрольная работа №3", 
      student: "Алексей Иванов",
      submitted: "2 часа назад",
      status: "pending",
      type: "test"
    },
    { 
      id: 2, 
      title: "Домашнее задание №15", 
      student: "Мария Петрова",
      submitted: "5 часов назад",
      status: "pending",
      type: "homework"
    },
    { 
      id: 3, 
      title: "Тест по уравнениям", 
      student: "Дмитрий Сидоров",
      submitted: "1 день назад",
      status: "overdue",
      type: "test"
    },
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'warning': return 'bg-yellow-100 text-yellow-700';
      case 'attention': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getAnnouncementIcon = (type: string) => {
    switch (type) {
      case 'important': return 'AlertCircle';
      case 'event': return 'Calendar';
      case 'homework': return 'BookOpen';
      default: return 'Info';
    }
  };

  const getAnnouncementColor = (type: string) => {
    switch (type) {
      case 'important': return 'bg-red-50 border-red-200 text-red-700';
      case 'event': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'homework': return 'bg-purple-50 border-purple-200 text-purple-700';
      default: return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-slate-800">EduFlow LMS</h1>
              <p className="text-xs text-slate-500 hidden md:block">Панель преподавателя</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="Bell" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Settings" size={20} />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">ПП</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Добро пожаловать! 👋</h2>
          <p className="text-slate-600">Главная панель преподавателя</p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-6 md:mb-8">
          <Button 
            variant={selectedGroup === "10-А" ? "default" : "outline"}
            onClick={() => setSelectedGroup("10-А")}
            className="w-full md:w-auto"
          >
            <Icon name="Users" size={16} className="mr-2" />
            Группа 10-А
          </Button>
          <Button 
            variant={selectedGroup === "9-Б" ? "default" : "outline"}
            onClick={() => setSelectedGroup("9-Б")}
            className="w-full md:w-auto"
          >
            <Icon name="Users" size={16} className="mr-2" />
            Группа 9-Б
          </Button>
          <Button 
            variant={selectedGroup === "11-А" ? "default" : "outline"}
            onClick={() => setSelectedGroup("11-А")}
            className="w-full md:w-auto"
          >
            <Icon name="Users" size={16} className="mr-2" />
            Группа 11-А
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="lg:col-span-2 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Megaphone" className="text-blue-500" size={20} />
                Анонсы и объявления
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Icon name="Plus" size={16} className="mr-1" />
                <span className="hidden md:inline">Создать</span>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {announcements.map((announcement) => (
                <div 
                  key={announcement.id} 
                  className={`p-4 rounded-xl border-2 ${getAnnouncementColor(announcement.type)} transition-all hover:shadow-md`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Icon name={getAnnouncementIcon(announcement.type) as any} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-slate-800">{announcement.title}</h4>
                        <Badge variant="outline" className="text-xs w-fit">
                          {announcement.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{announcement.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {announcement.group}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" className="text-purple-500" size={20} />
                Расписание на сегодня
              </CardTitle>
              <CardDescription>Понедельник, 1 февраля</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {todaySchedule.map((lesson) => (
                <div 
                  key={lesson.id} 
                  className={`p-3 rounded-lg border-l-4 ${
                    lesson.status === 'completed' ? 'bg-gray-50 border-gray-400 opacity-60' :
                    lesson.status === 'current' ? 'bg-blue-50 border-blue-500' :
                    'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon 
                        name={lesson.status === 'completed' ? 'CheckCircle2' : lesson.status === 'current' ? 'Clock' : 'Circle'} 
                        size={16} 
                        className={
                          lesson.status === 'completed' ? 'text-gray-400' :
                          lesson.status === 'current' ? 'text-blue-500' :
                          'text-slate-400'
                        }
                      />
                      <span className="text-sm font-semibold text-slate-700">{lesson.time}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {lesson.room}
                    </Badge>
                  </div>
                  <h5 className="font-semibold text-slate-800 text-sm mb-1">{lesson.subject}</h5>
                  <p className="text-xs text-slate-600">{lesson.group}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" className="text-green-500" size={20} />
                Список студентов ({students.length})
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Icon name="Filter" size={16} />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {students.map((student) => (
                <div 
                  key={student.id} 
                  className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
                  onClick={() => navigate('/course/1')}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                        {getInitials(student.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0 mb-1">
                        <h4 className="font-semibold text-slate-800">{student.name}</h4>
                        <Badge className={getStatusColor(student.status)} variant="secondary">
                          {student.status === 'active' ? 'Активен' : 
                           student.status === 'warning' ? 'Внимание' : 
                           'Требует внимания'}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs text-slate-600 mb-2">
                        <p className="flex items-center gap-1">
                          <Icon name="Mail" size={12} />
                          {student.email}
                        </p>
                        <p className="flex items-center gap-1">
                          <Icon name="Phone" size={12} />
                          {student.phone}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={12} className="text-blue-500" />
                          <span className="text-slate-600">Посещаемость: <strong>{student.attendance}%</strong></span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="TrendingUp" size={12} className="text-green-500" />
                          <span className="text-slate-600">Средний балл: <strong>{student.avgGrade}</strong></span>
                        </span>
                        <span className="text-slate-500">{student.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileCheck" className="text-orange-500" size={20} />
                Задания на проверку
              </CardTitle>
              <Badge variant="secondary">{tasks.length}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              {tasks.map((task) => (
                <div 
                  key={task.id} 
                  className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800 mb-1">{task.title}</h4>
                      <p className="text-sm text-slate-600 mb-2">{task.student}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge 
                          variant={task.status === 'overdue' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {task.status === 'pending' ? 'На проверке' : 'Просрочено'}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {task.type === 'test' ? 'Тест' : 'Домашнее задание'}
                        </Badge>
                        <span className="text-xs text-slate-500">{task.submitted}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    <Icon name="Eye" size={14} className="mr-1" />
                    Проверить
                  </Button>
                </div>
              ))}
              
              <Button variant="outline" className="w-full mt-4">
                Показать все задания
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <MobileNav />
    </div>
    </div>
  );
};

export default Index;