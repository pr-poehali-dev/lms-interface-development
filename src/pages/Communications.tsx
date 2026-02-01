import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const Communications = () => {
  const [activeTab, setActiveTab] = useState("chats");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Алексей Иванов",
      lastMessage: "Спасибо за помощь с заданием!",
      time: "10:30",
      unread: 2,
      online: true,
      type: "student"
    },
    {
      id: 2,
      name: "Мария Петрова",
      lastMessage: "Когда будет следующая контрольная?",
      time: "Вчера",
      unread: 0,
      online: false,
      type: "student"
    },
    {
      id: 3,
      name: "Группа 10-А",
      lastMessage: "Иванов: Понял, спасибо!",
      time: "14:20",
      unread: 5,
      online: true,
      type: "group"
    },
    {
      id: 4,
      name: "Дмитрий Сидоров",
      lastMessage: "Можно пересдать тест?",
      time: "2 дня назад",
      unread: 1,
      online: false,
      type: "student"
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Алексей Иванов",
      text: "Здравствуйте! Не могу понять задачу №15",
      time: "10:15",
      isMine: false
    },
    {
      id: 2,
      sender: "Вы",
      text: "Здравствуй! Какой именно момент вызывает сложности?",
      time: "10:18",
      isMine: true
    },
    {
      id: 3,
      sender: "Алексей Иванов",
      text: "Не понимаю, как применить формулу квадратного уравнения к этой задаче",
      time: "10:20",
      isMine: false
    },
    {
      id: 4,
      sender: "Вы",
      text: "Посмотри на пример в параграфе 12. Там похожая задача разобрана подробно.",
      time: "10:25",
      isMine: true
    },
    {
      id: 5,
      sender: "Алексей Иванов",
      text: "Спасибо за помощь с заданием!",
      time: "10:30",
      isMine: false
    },
  ];

  const forums = [
    {
      id: 1,
      title: "Обсуждение контрольной работы №3",
      course: "Математика 10-А",
      author: "Вы",
      replies: 12,
      lastActivity: "2 часа назад",
      isPinned: true,
      views: 45
    },
    {
      id: 2,
      title: "Вопросы по домашнему заданию",
      course: "Математика 10-А",
      author: "Мария Петрова",
      replies: 8,
      lastActivity: "5 часов назад",
      isPinned: false,
      views: 32
    },
    {
      id: 3,
      title: "Дополнительные материалы для подготовки",
      course: "Алгебра 9-Б",
      author: "Вы",
      replies: 5,
      lastActivity: "1 день назад",
      isPinned: true,
      views: 67
    },
    {
      id: 4,
      title: "Разбор сложных задач",
      course: "Геометрия 11-А",
      author: "Елена Кузнецова",
      replies: 15,
      lastActivity: "2 дня назад",
      isPinned: false,
      views: 89
    },
  ];

  const comments = [
    {
      id: 1,
      student: "Алексей Иванов",
      assignment: "Контрольная работа №3",
      comment: "Хорошая работа! Обрати внимание на задачу №7 - там небольшая ошибка в вычислениях.",
      score: 85,
      date: "2 часа назад",
      hasReply: false
    },
    {
      id: 2,
      student: "Мария Петрова",
      assignment: "Домашнее задание №15",
      comment: "Отличный результат! Все решено верно, оформление идеальное.",
      score: 100,
      date: "5 часов назад",
      hasReply: true
    },
    {
      id: 3,
      student: "Дмитрий Сидоров",
      assignment: "Тест по уравнениям",
      comment: "Нужно больше практики. Рекомендую повторить тему квадратных уравнений.",
      score: 68,
      date: "1 день назад",
      hasReply: false
    },
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-slate-800">Коммуникация</h1>
                <p className="text-xs md:text-sm text-slate-500">Чаты, форумы и комментарии</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-slate-200 p-1 w-full md:w-auto">
            <TabsTrigger value="chats" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex-1 md:flex-none">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Чаты
              <Badge variant="secondary" className="ml-2">3</Badge>
            </TabsTrigger>
            <TabsTrigger value="forums" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex-1 md:flex-none">
              <Icon name="Users" size={16} className="mr-2" />
              Форумы
            </TabsTrigger>
            <TabsTrigger value="comments" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex-1 md:flex-none">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Комментарии
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chats">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-md lg:col-span-1">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Все чаты</CardTitle>
                  <Input placeholder="Поиск по чатам..." className="mt-2" />
                </CardHeader>
                <CardContent className="space-y-2 max-h-[600px] overflow-y-auto">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        selectedChat === chat.id
                          ? 'bg-blue-50 border-2 border-blue-200'
                          : 'bg-slate-50 hover:bg-slate-100 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                              {chat.type === 'group' ? <Icon name="Users" size={20} /> : getInitials(chat.name)}
                            </AvatarFallback>
                          </Avatar>
                          {chat.online && chat.type === 'student' && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-slate-800 text-sm truncate">{chat.name}</h4>
                            <span className="text-xs text-slate-500 whitespace-nowrap ml-2">{chat.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-slate-600 truncate">{chat.lastMessage}</p>
                            {chat.unread > 0 && (
                              <Badge variant="default" className="ml-2 h-5 min-w-5 flex items-center justify-center">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-md lg:col-span-2">
                {selectedChat ? (
                  <>
                    <CardHeader className="border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                              {chats.find(c => c.id === selectedChat)?.type === 'group' 
                                ? <Icon name="Users" size={20} /> 
                                : getInitials(chats.find(c => c.id === selectedChat)?.name || '')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-slate-800">
                              {chats.find(c => c.id === selectedChat)?.name}
                            </h3>
                            {chats.find(c => c.id === selectedChat)?.online && (
                              <p className="text-xs text-green-600">В сети</p>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Icon name="Phone" size={20} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Icon name="Video" size={20} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Icon name="MoreVertical" size={20} />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto">
                        {messages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`max-w-[70%] ${msg.isMine ? 'order-2' : 'order-1'}`}>
                              {!msg.isMine && (
                                <p className="text-xs text-slate-600 mb-1">{msg.sender}</p>
                              )}
                              <div
                                className={`p-3 rounded-2xl ${
                                  msg.isMine
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-slate-100 text-slate-800'
                                }`}
                              >
                                <p className="text-sm">{msg.text}</p>
                              </div>
                              <p className={`text-xs text-slate-500 mt-1 ${msg.isMine ? 'text-right' : 'text-left'}`}>
                                {msg.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-4 border-t">
                        <Button variant="ghost" size="icon">
                          <Icon name="Paperclip" size={20} />
                        </Button>
                        <Input
                          placeholder="Введите сообщение..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="flex-1"
                        />
                        <Button>
                          <Icon name="Send" size={20} />
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="flex items-center justify-center h-[500px]">
                    <div className="text-center text-slate-400">
                      <Icon name="MessageSquare" size={64} className="mx-auto mb-4" />
                      <p className="text-lg">Выберите чат для начала общения</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="forums">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Форумы курсов</CardTitle>
                    <CardDescription>Обсуждения и вопросы студентов</CardDescription>
                  </div>
                  <Button>
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать тему
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {forums.map((forum) => (
                  <div
                    key={forum.id}
                    className="p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-blue-200 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Icon name="MessageSquare" size={24} className="text-blue-600" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-slate-800">{forum.title}</h4>
                              {forum.isPinned && (
                                <Icon name="Pin" size={16} className="text-orange-500" />
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                              <Badge variant="outline">{forum.course}</Badge>
                              <span>•</span>
                              <span>Автор: {forum.author}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                          <span className="flex items-center gap-1">
                            <Icon name="MessageCircle" size={14} />
                            {forum.replies} ответов
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {forum.views} просмотров
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {forum.lastActivity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comments">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Комментарии к работам</CardTitle>
                <CardDescription>Ваши отзывы на сданные задания</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="p-4 bg-white rounded-xl border-2 border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                          {getInitials(comment.student)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-semibold text-slate-800">{comment.student}</h4>
                            <p className="text-sm text-slate-600">{comment.assignment}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-blue-600">{comment.score}</p>
                            <p className="text-xs text-slate-600">баллов</p>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg mb-3">
                          <p className="text-sm text-slate-800">{comment.comment}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-xs text-slate-500">{comment.date}</p>
                          <div className="flex gap-2">
                            {comment.hasReply && (
                              <Badge variant="outline" className="text-xs">
                                <Icon name="MessageCircle" size={12} className="mr-1" />
                                Есть ответ
                              </Badge>
                            )}
                            <Button variant="ghost" size="sm">
                              <Icon name="Edit" size={14} className="mr-1" />
                              Редактировать
                            </Button>
                          </div>
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

export default Communications;