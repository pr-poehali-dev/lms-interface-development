import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const Course = () => {
  const [activeTab, setActiveTab] = useState("materials");
  const [showAddMaterial, setShowAddMaterial] = useState(false);

  const courseMaterials = [
    {
      id: 1,
      type: "video",
      title: "Квадратные уравнения. Введение",
      description: "Основные понятия и методы решения квадратных уравнений",
      duration: "25 мин",
      views: 24,
      date: "28.01.2026",
      status: "published"
    },
    {
      id: 2,
      type: "document",
      title: "Конспект лекции: Системы уравнений",
      description: "Методы решения систем линейных и нелинейных уравнений",
      size: "2.4 МБ",
      downloads: 28,
      date: "25.01.2026",
      status: "published"
    },
    {
      id: 3,
      type: "test",
      title: "Тест: Квадратные уравнения",
      description: "15 вопросов на проверку знаний",
      questions: 15,
      completed: 18,
      date: "22.01.2026",
      status: "published"
    },
    {
      id: 4,
      type: "assignment",
      title: "Домашнее задание №15",
      description: "Решение задач повышенной сложности",
      deadline: "10.02.2026",
      submitted: 12,
      total: 28,
      date: "20.01.2026",
      status: "published"
    },
    {
      id: 5,
      type: "document",
      title: "Дополнительные материалы",
      description: "Сборник задач для подготовки к контрольной",
      size: "5.1 МБ",
      downloads: 15,
      date: "15.01.2026",
      status: "draft"
    },
  ];

  const studentGrades = [
    {
      id: 1,
      name: "Алексей Иванов",
      avgGrade: 4.8,
      attendance: 95,
      assignments: { completed: 14, total: 15 },
      tests: { passed: 8, total: 8 },
      lastActivity: "2 часа назад",
      trend: "up",
      grades: [5, 5, 4, 5, 5, 4, 5],
      feedback: "Отличная работа! Показывает стабильно высокие результаты."
    },
    {
      id: 2,
      name: "Мария Петрова",
      avgGrade: 4.9,
      attendance: 98,
      assignments: { completed: 15, total: 15 },
      tests: { passed: 8, total: 8 },
      lastActivity: "1 час назад",
      trend: "up",
      grades: [5, 5, 5, 5, 4, 5, 5],
      feedback: "Превосходные результаты! Активно участвует в обсуждениях."
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      avgGrade: 4.2,
      attendance: 87,
      assignments: { completed: 11, total: 15 },
      tests: { passed: 7, total: 8 },
      lastActivity: "1 день назад",
      trend: "down",
      grades: [4, 4, 5, 3, 4, 4, 4],
      feedback: "Необходимо больше практики. Рекомендую дополнительные занятия."
    },
    {
      id: 4,
      name: "Елена Кузнецова",
      avgGrade: 5.0,
      attendance: 100,
      assignments: { completed: 15, total: 15 },
      tests: { passed: 8, total: 8 },
      lastActivity: "30 минут назад",
      trend: "stable",
      grades: [5, 5, 5, 5, 5, 5, 5],
      feedback: "Идеальная успеваемость! Может помогать другим студентам."
    },
    {
      id: 5,
      name: "Артём Смирнов",
      avgGrade: 3.8,
      attendance: 72,
      assignments: { completed: 8, total: 15 },
      tests: { passed: 5, total: 8 },
      lastActivity: "3 дня назад",
      trend: "down",
      grades: [3, 4, 3, 4, 3, 4, 3],
      feedback: "Требуется внимание. Пропускает занятия и не сдаёт задания вовремя."
    },
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'video': return 'Video';
      case 'document': return 'FileText';
      case 'test': return 'CheckSquare';
      case 'assignment': return 'ClipboardList';
      default: return 'File';
    }
  };

  const getMaterialColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-50 text-red-600 border-red-200';
      case 'document': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'test': return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'assignment': return 'bg-orange-50 text-orange-600 border-orange-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="icon">
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg md:text-xl font-bold text-slate-800">Математика 10-А класс</h1>
              <p className="text-xs md:text-sm text-slate-500">28 студентов • Весенний семестр 2026</p>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить материал
            </Button>
            <Button size="icon" className="md:hidden">
              <Icon name="Plus" size={20} />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon name="Users" className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Студентов</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">28</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Icon name="BookOpen" className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Материалов</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">32</p>
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-slate-200 p-1 w-full md:w-auto overflow-x-auto">
            <TabsTrigger value="materials" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex-1 md:flex-none">
              <Icon name="BookOpen" size={16} className="mr-2" />
              <span className="hidden md:inline">Материалы</span>
              <span className="md:hidden">Материалы</span>
            </TabsTrigger>
            <TabsTrigger value="grades" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex-1 md:flex-none">
              <Icon name="BarChart3" size={16} className="mr-2" />
              <span className="hidden md:inline">Успеваемость</span>
              <span className="md:hidden">Оценки</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex-1 md:flex-none">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              <span className="hidden md:inline">Аналитика</span>
              <span className="md:hidden">Статистика</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="materials" className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <div>
                  <CardTitle>Материалы курса</CardTitle>
                  <CardDescription>Управление учебными материалами и заданиями</CardDescription>
                </div>
                <Button onClick={() => setShowAddMaterial(!showAddMaterial)} className="hidden md:flex">
                  <Icon name={showAddMaterial ? "X" : "Plus"} size={16} className="mr-2" />
                  {showAddMaterial ? "Отмена" : "Добавить"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {showAddMaterial && (
                  <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl space-y-4">
                    <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                      <Icon name="Plus" size={18} className="text-blue-600" />
                      Добавить новый материал
                    </h4>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <Button variant="outline" className="flex-col h-auto py-3 hover:bg-white">
                        <Icon name="Video" size={24} className="text-red-600 mb-1" />
                        <span className="text-xs">Видео</span>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3 hover:bg-white">
                        <Icon name="FileText" size={24} className="text-blue-600 mb-1" />
                        <span className="text-xs">Документ</span>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3 hover:bg-white">
                        <Icon name="CheckSquare" size={24} className="text-purple-600 mb-1" />
                        <span className="text-xs">Тест</span>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-3 hover:bg-white">
                        <Icon name="ClipboardList" size={24} className="text-orange-600 mb-1" />
                        <span className="text-xs">Задание</span>
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <Input placeholder="Название материала" />
                      <Textarea placeholder="Описание" rows={3} />
                      <div className="flex flex-col md:flex-row gap-2">
                        <Button className="flex-1">
                          <Icon name="Upload" size={16} className="mr-2" />
                          Загрузить файл
                        </Button>
                        <Button variant="outline" className="flex-1" onClick={() => setShowAddMaterial(false)}>
                          Отмена
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {courseMaterials.map((material) => (
                    <div
                      key={material.id}
                      className="p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-blue-200 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-3 rounded-lg border-2 ${getMaterialColor(material.type)}`}>
                          <Icon name={getMaterialIcon(material.type) as any} size={24} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-slate-800 mb-1">{material.title}</h4>
                              <p className="text-sm text-slate-600">{material.description}</p>
                            </div>
                            <Badge variant={material.status === 'published' ? 'default' : 'secondary'}>
                              {material.status === 'published' ? 'Опубликовано' : 'Черновик'}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mb-3">
                            <span className="flex items-center gap-1">
                              <Icon name="Calendar" size={12} />
                              {material.date}
                            </span>
                            {material.type === 'video' && (
                              <>
                                <span className="flex items-center gap-1">
                                  <Icon name="Clock" size={12} />
                                  {material.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="Eye" size={12} />
                                  {material.views} просмотров
                                </span>
                              </>
                            )}
                            {material.type === 'document' && (
                              <>
                                <span className="flex items-center gap-1">
                                  <Icon name="HardDrive" size={12} />
                                  {material.size}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="Download" size={12} />
                                  {material.downloads} скачиваний
                                </span>
                              </>
                            )}
                            {material.type === 'test' && (
                              <>
                                <span className="flex items-center gap-1">
                                  <Icon name="HelpCircle" size={12} />
                                  {material.questions} вопросов
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="Users" size={12} />
                                  {material.completed} выполнили
                                </span>
                              </>
                            )}
                            {material.type === 'assignment' && (
                              <>
                                <span className="flex items-center gap-1">
                                  <Icon name="Clock" size={12} />
                                  До {material.deadline}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Icon name="Users" size={12} />
                                  {material.submitted}/{material.total} сдали
                                </span>
                              </>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Eye" size={14} className="mr-1" />
                              Просмотр
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" size={14} className="mr-1" />
                              Редактировать
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              <Icon name="Trash2" size={14} className="mr-1" />
                              Удалить
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Успеваемость студентов</CardTitle>
                    <CardDescription>Оценки, посещаемость и отзывы</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={14} className="mr-1" />
                      Экспорт
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Filter" size={14} className="mr-1" />
                      Фильтр
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {studentGrades.map((student) => (
                  <div
                    key={student.id}
                    className="p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-blue-200 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg">
                          {getInitials(student.name)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-semibold text-slate-800 text-lg mb-1">{student.name}</h4>
                            <p className="text-sm text-slate-600">Последняя активность: {student.lastActivity}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-right">
                              <p className="text-2xl font-bold text-slate-800">{student.avgGrade}</p>
                              <p className="text-xs text-slate-600">Средний балл</p>
                            </div>
                            <Icon 
                              name={getTrendIcon(student.trend) as any} 
                              size={24} 
                              className={getTrendColor(student.trend)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Посещаемость</p>
                            <div className="flex items-center gap-2">
                              <Progress value={student.attendance} className="flex-1" />
                              <span className="text-sm font-semibold text-slate-800">{student.attendance}%</span>
                            </div>
                          </div>

                          <div className="p-3 bg-purple-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Выполнено заданий</p>
                            <div className="flex items-center gap-2">
                              <Progress 
                                value={(student.assignments.completed / student.assignments.total) * 100} 
                                className="flex-1" 
                              />
                              <span className="text-sm font-semibold text-slate-800">
                                {student.assignments.completed}/{student.assignments.total}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Пройдено тестов</p>
                            <div className="flex items-center gap-2">
                              <Progress 
                                value={(student.tests.passed / student.tests.total) * 100} 
                                className="flex-1" 
                              />
                              <span className="text-sm font-semibold text-slate-800">
                                {student.tests.passed}/{student.tests.total}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <p className="text-xs text-slate-600 mb-2">Последние оценки:</p>
                          <div className="flex gap-1">
                            {student.grades.map((grade, index) => (
                              <div
                                key={index}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm ${
                                  grade === 5 ? 'bg-green-100 text-green-700' :
                                  grade === 4 ? 'bg-blue-100 text-blue-700' :
                                  grade === 3 ? 'bg-orange-100 text-orange-700' :
                                  'bg-red-100 text-red-700'
                                }`}
                              >
                                {grade}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg mb-3">
                          <p className="text-xs text-slate-600 mb-1 flex items-center gap-1">
                            <Icon name="MessageSquare" size={12} />
                            Отзыв преподавателя:
                          </p>
                          <p className="text-sm text-slate-800">{student.feedback}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={14} className="mr-1" />
                            Подробнее
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="MessageSquare" size={14} className="mr-1" />
                            Оставить отзыв
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Mail" size={14} className="mr-1" />
                            Написать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Аналитика курса</CardTitle>
                <CardDescription>Общая статистика и динамика успеваемости</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <Icon name="BarChart3" size={48} className="mx-auto mb-2" />
                    <p>Раздел в разработке</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <MobileNav />
    </div>
    </div>
  );
};

export default Course;