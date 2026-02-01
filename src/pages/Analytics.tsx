import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const courseStats = [
    {
      id: 1,
      name: "Математика 10-А",
      students: 28,
      avgGrade: 4.3,
      attendance: 89,
      completion: 78,
      trend: "up",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Алгебра 9-Б",
      students: 32,
      avgGrade: 4.5,
      attendance: 92,
      completion: 85,
      trend: "up",
      color: "bg-purple-500"
    },
    {
      id: 3,
      name: "Геометрия 11-А",
      students: 24,
      avgGrade: 4.1,
      attendance: 87,
      completion: 72,
      trend: "down",
      color: "bg-green-500"
    },
  ];

  const activityData = [
    { day: "Пн", value: 85 },
    { day: "Вт", value: 92 },
    { day: "Ср", value: 78 },
    { day: "Чт", value: 88 },
    { day: "Пт", value: 95 },
    { day: "Сб", value: 45 },
    { day: "Вс", value: 30 },
  ];

  const gradeDistribution = [
    { grade: "5", count: 45, percentage: 32, color: "bg-green-500" },
    { grade: "4", count: 58, percentage: 41, color: "bg-blue-500" },
    { grade: "3", count: 28, percentage: 20, color: "bg-orange-500" },
    { grade: "2", count: 10, percentage: 7, color: "bg-red-500" },
  ];

  const topStudents = [
    { id: 1, name: "Елена Кузнецова", avgGrade: 5.0, courses: 3, achievements: 12 },
    { id: 2, name: "Мария Петрова", avgGrade: 4.9, courses: 3, achievements: 10 },
    { id: 3, name: "Алексей Иванов", avgGrade: 4.8, courses: 3, achievements: 8 },
    { id: 4, name: "Анна Смирнова", avgGrade: 4.7, courses: 2, achievements: 7 },
    { id: 5, name: "Иван Петров", avgGrade: 4.6, courses: 3, achievements: 6 },
  ];

  const strugglingStudents = [
    { id: 1, name: "Артём Смирнов", avgGrade: 3.8, attendance: 72, missedAssignments: 7 },
    { id: 2, name: "Дмитрий Сидоров", avgGrade: 4.2, attendance: 87, missedAssignments: 4 },
    { id: 3, name: "Олег Иванов", avgGrade: 3.5, attendance: 68, missedAssignments: 9 },
  ];

  const monthlyProgress = [
    { month: "Сен", avgGrade: 4.1, attendance: 85 },
    { month: "Окт", avgGrade: 4.2, attendance: 87 },
    { month: "Ноя", avgGrade: 4.3, attendance: 88 },
    { month: "Дек", avgGrade: 4.2, attendance: 86 },
    { month: "Янв", avgGrade: 4.4, attendance: 89 },
    { month: "Фев", avgGrade: 4.3, attendance: 89 },
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? 'TrendingUp' : 'TrendingDown';
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-slate-800">Аналитика</h1>
                <p className="text-xs md:text-sm text-slate-500">Статистика и анализ успеваемости</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                variant={selectedPeriod === "week" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedPeriod("week")}
              >
                Неделя
              </Button>
              <Button 
                variant={selectedPeriod === "month" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedPeriod("month")}
              >
                Месяц
              </Button>
              <Button 
                variant={selectedPeriod === "year" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedPeriod("year")}
              >
                Год
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon name="Users" className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Всего студентов</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">84</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Icon name="TrendingUp" className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Средний балл</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">4.3</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Icon name="Calendar" className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Посещаемость</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">89%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Icon name="CheckCircle" className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Выполнение</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">78%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-slate-200 p-1 w-full md:w-auto overflow-x-auto">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="LayoutDashboard" size={16} className="mr-2" />
              Обзор
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="BookOpen" size={16} className="mr-2" />
              По курсам
            </TabsTrigger>
            <TabsTrigger value="students" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="Users" size={16} className="mr-2" />
              Студенты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" className="text-blue-500" />
                    Активность студентов
                  </CardTitle>
                  <CardDescription>Посещаемость за последнюю неделю</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {activityData.map((item) => (
                      <div key={item.day} className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-700 w-8">{item.day}</span>
                        <Progress value={item.value} className="flex-1" />
                        <span className="text-sm font-semibold text-slate-800 w-12 text-right">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PieChart" className="text-purple-500" />
                    Распределение оценок
                  </CardTitle>
                  <CardDescription>Общая статистика по всем курсам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {gradeDistribution.map((item) => (
                      <div key={item.grade}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                              {item.grade}
                            </div>
                            <span className="text-sm text-slate-700">{item.count} студентов</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-800">{item.percentage}%</span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-green-500" />
                  Динамика успеваемости
                </CardTitle>
                <CardDescription>Средний балл и посещаемость по месяцам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {monthlyProgress.map((item) => (
                      <div key={item.month} className="text-center">
                        <div className="mb-2 p-4 bg-slate-50 rounded-xl">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{item.avgGrade}</div>
                          <div className="text-xs text-slate-600">Балл</div>
                        </div>
                        <div className="mb-2 p-3 bg-purple-50 rounded-lg">
                          <div className="text-lg font-bold text-purple-600 mb-1">{item.attendance}%</div>
                          <div className="text-xs text-slate-600">Посещ.</div>
                        </div>
                        <div className="text-sm font-medium text-slate-700">{item.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Статистика по курсам</CardTitle>
                <CardDescription>Сравнение показателей между курсами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courseStats.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-blue-200 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center`}>
                        <Icon name="BookOpen" className="text-white" size={24} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-semibold text-slate-800 text-lg">{course.name}</h4>
                            <p className="text-sm text-slate-600">{course.students} студентов</p>
                          </div>
                          <Icon 
                            name={getTrendIcon(course.trend) as any} 
                            size={32} 
                            className={getTrendColor(course.trend)}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Средний балл</p>
                            <p className="text-2xl font-bold text-blue-600">{course.avgGrade}</p>
                          </div>

                          <div className="p-3 bg-purple-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Посещаемость</p>
                            <div className="flex items-center gap-2">
                              <Progress value={course.attendance} className="flex-1" />
                              <span className="text-sm font-semibold text-purple-600">{course.attendance}%</span>
                            </div>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Выполнение заданий</p>
                            <div className="flex items-center gap-2">
                              <Progress value={course.completion} className="flex-1" />
                              <span className="text-sm font-semibold text-green-600">{course.completion}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" className="text-yellow-500" />
                    Лучшие студенты
                  </CardTitle>
                  <CardDescription>Топ-5 по успеваемости</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topStudents.map((student, index) => (
                    <div
                      key={student.id}
                      className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                          index === 0 ? 'bg-yellow-500 text-white' :
                          index === 1 ? 'bg-gray-400 text-white' :
                          index === 2 ? 'bg-orange-600 text-white' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-800">{student.name}</h4>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-1">
                            <span className="flex items-center gap-1">
                              <Icon name="TrendingUp" size={12} />
                              Балл: <strong>{student.avgGrade}</strong>
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="BookOpen" size={12} />
                              {student.courses} курса
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Award" size={12} />
                              {student.achievements} достижений
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="AlertTriangle" className="text-red-500" />
                    Требуют внимания
                  </CardTitle>
                  <CardDescription>Студенты с низкой успеваемостью</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {strugglingStudents.map((student) => (
                    <div
                      key={student.id}
                      className="p-4 bg-red-50 rounded-xl border-2 border-red-100"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-1">{student.name}</h4>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                            <span className="flex items-center gap-1">
                              <Icon name="TrendingDown" size={12} className="text-red-500" />
                              Балл: <strong>{student.avgGrade}</strong>
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Calendar" size={12} />
                              Посещ.: <strong>{student.attendance}%</strong>
                            </span>
                          </div>
                        </div>
                        <Badge variant="destructive">{student.missedAssignments} пропусков</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Icon name="MessageSquare" size={14} className="mr-1" />
                          Написать
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Icon name="Phone" size={14} className="mr-1" />
                          Позвонить
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Analytics;