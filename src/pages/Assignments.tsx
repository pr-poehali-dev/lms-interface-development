import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const Assignments = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [assignmentType, setAssignmentType] = useState("test");
  const [questions, setQuestions] = useState<any[]>([]);

  const assignments = [
    {
      id: 1,
      title: "Контрольная работа №3",
      type: "test",
      course: "Математика 10-А",
      deadline: "15.02.2026",
      totalStudents: 28,
      submitted: 18,
      checked: 12,
      status: "active",
      autoGrade: true
    },
    {
      id: 2,
      title: "Домашнее задание №15",
      type: "homework",
      course: "Математика 10-А",
      deadline: "10.02.2026",
      totalStudents: 28,
      submitted: 24,
      checked: 24,
      status: "active",
      autoGrade: false
    },
    {
      id: 3,
      title: "Тест по уравнениям",
      type: "quiz",
      course: "Алгебра 9-Б",
      deadline: "08.02.2026",
      totalStudents: 32,
      submitted: 32,
      checked: 32,
      status: "completed",
      autoGrade: true
    },
    {
      id: 4,
      title: "Практическое задание",
      type: "practice",
      course: "Геометрия 11-А",
      deadline: "20.02.2026",
      totalStudents: 24,
      submitted: 8,
      checked: 3,
      status: "active",
      autoGrade: false
    },
  ];

  const submissions = [
    {
      id: 1,
      student: "Алексей Иванов",
      assignment: "Контрольная работа №3",
      submitted: "2 часа назад",
      status: "pending",
      score: null,
      autoChecked: false
    },
    {
      id: 2,
      student: "Мария Петрова",
      assignment: "Контрольная работа №3",
      submitted: "5 часов назад",
      status: "pending",
      score: null,
      autoChecked: false
    },
    {
      id: 3,
      student: "Дмитрий Сидоров",
      assignment: "Домашнее задание №15",
      submitted: "1 день назад",
      status: "checked",
      score: 85,
      autoChecked: true
    },
    {
      id: 4,
      student: "Елена Кузнецова",
      assignment: "Тест по уравнениям",
      submitted: "2 дня назад",
      status: "checked",
      score: 100,
      autoChecked: true
    },
  ];

  const addQuestion = (type: string) => {
    const newQuestion = {
      id: questions.length + 1,
      type,
      text: "",
      points: 1,
      options: type === "multiple" || type === "single" ? ["", "", "", ""] : [],
      correctAnswer: type === "single" ? 0 : type === "multiple" ? [] : ""
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'test': return 'FileCheck';
      case 'homework': return 'BookOpen';
      case 'quiz': return 'CheckSquare';
      case 'practice': return 'Calculator';
      default: return 'File';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'test': return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'homework': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'quiz': return 'bg-green-50 text-green-600 border-green-200';
      case 'practice': return 'bg-orange-50 text-orange-600 border-orange-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  const getQuestionIcon = (type: string) => {
    switch (type) {
      case 'single': return 'Circle';
      case 'multiple': return 'CheckSquare';
      case 'text': return 'FileText';
      case 'number': return 'Hash';
      default: return 'HelpCircle';
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-slate-800">Задания и тесты</h1>
                <p className="text-xs md:text-sm text-slate-500">Управление заданиями для студентов</p>
              </div>
            </div>
            <Button onClick={() => setShowCreateForm(!showCreateForm)}>
              <Icon name={showCreateForm ? "X" : "Plus"} size={16} className="mr-2" />
              {showCreateForm ? "Отмена" : "Создать"}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon name="FileCheck" className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Всего заданий</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Icon name="Clock" className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">На проверке</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">28</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Icon name="CheckCircle" className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Проверено</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">156</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Icon name="Zap" className="text-purple-600" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Автооценка</p>
                    <p className="text-lg md:text-xl font-bold text-slate-800">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        {showCreateForm && (
          <Card className="border-none shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Plus" className="text-blue-500" />
                Создать новое задание
              </CardTitle>
              <CardDescription>Настройте параметры задания и добавьте вопросы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Название задания</Label>
                  <Input placeholder="Контрольная работа №4" />
                </div>

                <div className="space-y-2">
                  <Label>Тип задания</Label>
                  <RadioGroup value={assignmentType} onValueChange={setAssignmentType} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="test" id="test" />
                      <Label htmlFor="test" className="cursor-pointer">Тест</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="homework" id="homework" />
                      <Label htmlFor="homework" className="cursor-pointer">Домашнее задание</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="quiz" id="quiz" />
                      <Label htmlFor="quiz" className="cursor-pointer">Викторина</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Курс</Label>
                  <Input placeholder="Математика 10-А" />
                </div>

                <div className="space-y-2">
                  <Label>Срок сдачи</Label>
                  <Input type="date" />
                </div>

                <div className="space-y-2">
                  <Label>Максимальный балл</Label>
                  <Input type="number" placeholder="100" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Описание задания</Label>
                <Textarea placeholder="Опишите цели и требования к заданию" rows={3} />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="auto-grade" />
                <Label htmlFor="auto-grade" className="cursor-pointer">
                  Включить автоматическую проверку и выставление оценок
                </Label>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-800">Вопросы теста</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => addQuestion('single')}>
                      <Icon name="Circle" size={14} className="mr-1" />
                      Один ответ
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => addQuestion('multiple')}>
                      <Icon name="CheckSquare" size={14} className="mr-1" />
                      Несколько
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => addQuestion('text')}>
                      <Icon name="FileText" size={14} className="mr-1" />
                      Текст
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {questions.length === 0 ? (
                    <div className="text-center py-8 text-slate-400">
                      <Icon name="HelpCircle" size={48} className="mx-auto mb-2" />
                      <p>Добавьте вопросы к заданию</p>
                    </div>
                  ) : (
                    questions.map((question, index) => (
                      <Card key={question.id} className="border-2 border-slate-200">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <Icon name={getQuestionIcon(question.type) as any} size={20} className="text-blue-600" />
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 space-y-2">
                                  <Label>Вопрос {index + 1}</Label>
                                  <Input placeholder="Введите текст вопроса" />
                                </div>
                                <div className="w-24">
                                  <Label>Баллы</Label>
                                  <Input type="number" defaultValue={1} className="w-full" />
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={() => removeQuestion(question.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Icon name="Trash2" size={18} />
                                </Button>
                              </div>

                              {(question.type === 'single' || question.type === 'multiple') && (
                                <div className="space-y-2 pl-4">
                                  <Label className="text-sm text-slate-600">Варианты ответов:</Label>
                                  {question.options.map((option: string, optIndex: number) => (
                                    <div key={optIndex} className="flex items-center gap-2">
                                      {question.type === 'single' ? (
                                        <RadioGroupItem value={optIndex.toString()} />
                                      ) : (
                                        <Checkbox />
                                      )}
                                      <Input placeholder={`Вариант ${optIndex + 1}`} className="flex-1" />
                                    </div>
                                  ))}
                                  <Button variant="outline" size="sm" className="mt-2">
                                    <Icon name="Plus" size={14} className="mr-1" />
                                    Добавить вариант
                                  </Button>
                                </div>
                              )}

                              {question.type === 'text' && (
                                <div className="pl-4">
                                  <Label className="text-sm text-slate-600">Правильный ответ (для автопроверки):</Label>
                                  <Textarea placeholder="Введите правильный ответ или оставьте пустым для ручной проверки" rows={2} />
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1">
                  <Icon name="Save" size={16} className="mr-2" />
                  Сохранить задание
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowCreateForm(false)}>
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-slate-200 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="List" size={16} className="mr-2" />
              Все задания
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="Clock" size={16} className="mr-2" />
              На проверке
            </TabsTrigger>
            <TabsTrigger value="checked" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="CheckCircle" size={16} className="mr-2" />
              Проверено
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Все задания</CardTitle>
                <CardDescription>Управление всеми созданными заданиями</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-blue-200 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-lg border-2 ${getTypeColor(assignment.type)}`}>
                        <Icon name={getTypeIcon(assignment.type) as any} size={24} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-semibold text-slate-800 text-lg mb-1">{assignment.title}</h4>
                            <p className="text-sm text-slate-600">{assignment.course}</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant={assignment.status === 'active' ? 'default' : 'secondary'}>
                              {assignment.status === 'active' ? 'Активно' : 'Завершено'}
                            </Badge>
                            {assignment.autoGrade && (
                              <Badge variant="outline" className="bg-purple-50 text-purple-600">
                                <Icon name="Zap" size={12} className="mr-1" />
                                Автооценка
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Срок сдачи</p>
                            <p className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {assignment.deadline}
                            </p>
                          </div>

                          <div className="p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Сдано работ</p>
                            <div className="flex items-center gap-2">
                              <Progress value={(assignment.submitted / assignment.totalStudents) * 100} className="flex-1" />
                              <span className="text-sm font-semibold text-slate-800">
                                {assignment.submitted}/{assignment.totalStudents}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-slate-600 mb-1">Проверено</p>
                            <div className="flex items-center gap-2">
                              <Progress value={(assignment.checked / assignment.submitted) * 100} className="flex-1" />
                              <span className="text-sm font-semibold text-slate-800">
                                {assignment.checked}/{assignment.submitted}
                              </span>
                            </div>
                          </div>
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
                          <Button variant="outline" size="sm">
                            <Icon name="Users" size={14} className="mr-1" />
                            Работы студентов
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
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Работы на проверке</CardTitle>
                <CardDescription>Сданные работы, требующие проверки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {submissions.filter(s => s.status === 'pending').map((submission) => (
                  <div
                    key={submission.id}
                    className="p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-orange-200 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{submission.student}</h4>
                        <p className="text-sm text-slate-600">{submission.assignment}</p>
                        <p className="text-xs text-slate-500 mt-1">Сдано: {submission.submitted}</p>
                      </div>
                      <Badge variant="secondary" className="bg-orange-50 text-orange-600">
                        Ожидает проверки
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Icon name="CheckSquare" size={14} className="mr-1" />
                        Проверить работу
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checked" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Проверенные работы</CardTitle>
                <CardDescription>Работы с выставленными оценками</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {submissions.filter(s => s.status === 'checked').map((submission) => (
                  <div
                    key={submission.id}
                    className="p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-green-200 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-1">{submission.student}</h4>
                        <p className="text-sm text-slate-600">{submission.assignment}</p>
                        <p className="text-xs text-slate-500 mt-1">Проверено: {submission.submitted}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {submission.autoChecked && (
                          <Badge variant="outline" className="bg-purple-50 text-purple-600">
                            <Icon name="Zap" size={12} className="mr-1" />
                            Авто
                          </Badge>
                        )}
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">{submission.score}</p>
                          <p className="text-xs text-slate-600">баллов</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Assignments;