import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { label: "Всего студентов", value: "342", icon: "Users", color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Активных курсов", value: "12", icon: "BookOpen", color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Заданий на проверку", value: "28", icon: "FileCheck", color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Средний балл", value: "4.2", icon: "TrendingUp", color: "text-green-500", bg: "bg-green-50" },
  ];

  const students = [
    { id: 1, name: "Алексей Иванов", avatar: "", progress: 85, grade: 4.8, status: "active", course: "Математика 10 класс" },
    { id: 2, name: "Мария Петрова", avatar: "", progress: 92, grade: 4.9, status: "active", course: "Математика 10 класс" },
    { id: 3, name: "Дмитрий Сидоров", avatar: "", progress: 68, grade: 4.2, status: "warning", course: "Алгебра 9 класс" },
    { id: 4, name: "Елена Кузнецова", avatar: "", progress: 95, grade: 5.0, status: "active", course: "Геометрия 11 класс" },
    { id: 5, name: "Артём Смирнов", avatar: "", progress: 45, grade: 3.8, status: "attention", course: "Математика 10 класс" },
  ];

  const templates = [
    { 
      id: 1, 
      title: "Тест с выбором ответов", 
      description: "Быстрый тест на 10-15 вопросов",
      icon: "CheckSquare",
      category: "Тестирование",
      uses: 156
    },
    { 
      id: 2, 
      title: "Письменная работа", 
      description: "Эссе или развёрнутый ответ",
      icon: "FileText",
      category: "Письменные работы",
      uses: 89
    },
    { 
      id: 3, 
      title: "Практическое задание", 
      description: "Задача с решением и объяснением",
      icon: "Calculator",
      category: "Практика",
      uses: 203
    },
    { 
      id: 4, 
      title: "Групповой проект", 
      description: "Совместная работа студентов",
      icon: "Users",
      category: "Проекты",
      uses: 42
    },
    { 
      id: 5, 
      title: "Видео-презентация", 
      description: "Запись объяснения темы",
      icon: "Video",
      category: "Медиа",
      uses: 67
    },
    { 
      id: 6, 
      title: "Быстрая викторина", 
      description: "5 вопросов за 10 минут",
      icon: "Zap",
      category: "Тестирование",
      uses: 312
    },
  ];

  const recentCourses = [
    { id: 1, name: "Математика 10 класс", students: 28, progress: 67, color: "bg-blue-500" },
    { id: 2, name: "Алгебра 9 класс", students: 32, progress: 82, color: "bg-purple-500" },
    { id: 3, name: "Геометрия 11 класс", students: 24, progress: 54, color: "bg-green-500" },
  ];

  const pendingTasks = [
    { id: 1, student: "Алексей Иванов", task: "Контрольная работа №3", course: "Математика 10", time: "2 часа назад" },
    { id: 2, student: "Мария Петрова", task: "Домашнее задание", course: "Математика 10", time: "5 часов назад" },
    { id: 3, student: "Дмитрий Сидоров", task: "Тест по уравнениям", course: "Алгебра 9", time: "1 день назад" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">EduFlow LMS</h1>
              <p className="text-xs text-slate-500">Панель преподавателя</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
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

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Добро пожаловать! 👋</h2>
          <p className="text-slate-600">Обзор вашей учебной деятельности</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
                  </div>
                  <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                    <Icon name={stat.icon as any} size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-slate-200 p-1">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="LayoutDashboard" size={16} className="mr-2" />
              Обзор
            </TabsTrigger>
            <TabsTrigger value="students" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="Users" size={16} className="mr-2" />
              Студенты
            </TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Шаблоны
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Аналитика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" className="text-blue-500" />
                    Активные курсы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center`}>
                            <Icon name="BookOpen" className="text-white" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800">{course.name}</h4>
                            <p className="text-sm text-slate-600">{course.students} студентов</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="ArrowRight" size={16} />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Прогресс курса</span>
                          <span className="font-semibold text-slate-800">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-orange-500" />
                    На проверку
                  </CardTitle>
                  <CardDescription>Новые работы студентов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className="p-3 border border-slate-200 rounded-lg hover:border-orange-300 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="font-medium text-sm text-slate-800">{task.student}</p>
                          <p className="text-xs text-slate-600">{task.task}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{task.course}</Badge>
                        <span className="text-xs text-slate-500">{task.time}</span>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Посмотреть все
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Мои студенты</CardTitle>
                    <CardDescription>Отслеживайте прогресс и успеваемость</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <Input placeholder="Поиск студента..." className="pl-9 w-64" />
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      <Icon name="UserPlus" size={16} className="mr-2" />
                      Добавить
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {students.map((student) => (
                    <div key={student.id} className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-semibold">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-slate-800">{student.name}</h4>
                            <p className="text-sm text-slate-600">{student.course}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-xs text-slate-600 mb-1">Прогресс</p>
                            <div className="flex items-center gap-2">
                              <Progress value={student.progress} className="w-24 h-2" />
                              <span className="text-sm font-semibold text-slate-800">{student.progress}%</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-slate-600 mb-1">Средний балл</p>
                            <div className="flex items-center gap-1">
                              <Icon name="Star" className="text-yellow-500" size={16} fill="currentColor" />
                              <span className="text-sm font-semibold text-slate-800">{student.grade}</span>
                            </div>
                          </div>
                          <Badge 
                            variant={student.status === 'active' ? 'default' : 'secondary'}
                            className={
                              student.status === 'active' ? 'bg-green-500' : 
                              student.status === 'warning' ? 'bg-yellow-500' : 
                              'bg-red-500'
                            }
                          >
                            {student.status === 'active' ? 'Активен' : student.status === 'warning' ? 'Внимание' : 'Требует помощи'}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Icon name="ChevronRight" size={20} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Sparkles" className="text-purple-500" />
                      Библиотека шаблонов
                    </CardTitle>
                    <CardDescription>Готовые шаблоны для быстрого создания заданий и курсов</CardDescription>
                  </div>
                  <Button className="bg-purple-500 hover:bg-purple-600">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать шаблон
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {templates.map((template) => (
                    <Card key={template.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-purple-200 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                            <Icon name={template.icon as any} className="text-purple-600" size={24} />
                          </div>
                          <Badge variant="secondary" className="text-xs">{template.category}</Badge>
                        </div>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Icon name="Users" size={14} />
                            <span>{template.uses} использований</span>
                          </div>
                          <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                            Использовать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-green-500" />
                    Динамика успеваемости
                  </CardTitle>
                  <CardDescription>Средний балл студентов по месяцам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-around gap-2">
                    {[3.8, 4.1, 4.3, 4.0, 4.5, 4.2].map((value, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gradient-to-t from-green-500 to-green-300 rounded-t-lg relative group hover:from-green-600 hover:to-green-400 transition-all cursor-pointer" style={{ height: `${value * 20}%` }}>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            {value}
                          </div>
                        </div>
                        <span className="text-xs text-slate-600">{['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'][index]}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" className="text-blue-500" />
                    Активность студентов
                  </CardTitle>
                  <CardDescription>Вовлечённость в обучение</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Высокая активность</span>
                      <span className="font-semibold text-green-600">68%</span>
                    </div>
                    <Progress value={68} className="h-3 bg-green-100 [&>div]:bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Средняя активность</span>
                      <span className="font-semibold text-yellow-600">24%</span>
                    </div>
                    <Progress value={24} className="h-3 bg-yellow-100 [&>div]:bg-yellow-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Низкая активность</span>
                      <span className="font-semibold text-red-600">8%</span>
                    </div>
                    <Progress value={8} className="h-3 bg-red-100 [&>div]:bg-red-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" className="text-purple-500" />
                    Топ студентов по успеваемости
                  </CardTitle>
                  <CardDescription>Лучшие результаты за последний месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {students.sort((a, b) => b.grade - a.grade).slice(0, 5).map((student, index) => (
                      <div key={student.id} className="flex items-center gap-4 p-3 bg-gradient-to-r from-slate-50 to-transparent rounded-xl">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                          index === 1 ? 'bg-gradient-to-br from-slate-300 to-slate-500' :
                          index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                          'bg-slate-300'
                        }`}>
                          {index + 1}
                        </div>
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-semibold">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800">{student.name}</h4>
                          <p className="text-sm text-slate-600">{student.course}</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-xs text-slate-600">Прогресс</p>
                            <p className="font-semibold text-slate-800">{student.progress}%</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-600">Балл</p>
                            <div className="flex items-center gap-1">
                              <Icon name="Star" className="text-yellow-500" size={14} fill="currentColor" />
                              <span className="font-bold text-slate-800">{student.grade}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;