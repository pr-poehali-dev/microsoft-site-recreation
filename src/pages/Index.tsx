import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">Microsoft</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-sm hover:text-primary transition-colors">О компании</a>
              <a href="#windows11" className="text-sm hover:text-primary transition-colors">Windows 11</a>
              <a href="#windows10" className="text-sm hover:text-primary transition-colors">Windows 10</a>
              <a href="#windows12" className="text-sm hover:text-primary transition-colors">Windows 12 Beta</a>
            </div>
          </div>
          <Button size="sm">Войти</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Добро пожаловать в будущее технологий
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              Создаём инновационные решения, которые меняют мир к лучшему
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              <Button size="lg" className="text-base px-8 hover-scale">
                Узнать больше
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 hover-scale">
                Наши продукты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-4xl font-bold mb-6">О компании</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы — глобальная технологическая компания, создающая программное обеспечение, 
                устройства и облачные сервисы мирового класса.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наша миссия — дать возможность каждому человеку и организации на планете 
                достичь большего.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1975</div>
                  <div className="text-sm text-muted-foreground">Год основания</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">220K+</div>
                  <div className="text-sm text-muted-foreground">Сотрудников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">190+</div>
                  <div className="text-sm text-muted-foreground">Стран</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <Card className="p-6 hover-scale transition-all duration-300 hover:shadow-xl">
                <Icon name="Sparkles" className="text-primary mb-4" size={32} />
                <h4 className="font-semibold mb-2">Инновации</h4>
                <p className="text-sm text-muted-foreground">Передовые технологии для бизнеса</p>
              </Card>
              <Card className="p-6 hover-scale transition-all duration-300 hover:shadow-xl">
                <Icon name="Shield" className="text-primary mb-4" size={32} />
                <h4 className="font-semibold mb-2">Безопасность</h4>
                <p className="text-sm text-muted-foreground">Защита данных на всех уровнях</p>
              </Card>
              <Card className="p-6 hover-scale transition-all duration-300 hover:shadow-xl">
                <Icon name="Users" className="text-primary mb-4" size={32} />
                <h4 className="font-semibold mb-2">Сообщество</h4>
                <p className="text-sm text-muted-foreground">Миллиарды пользователей по всему миру</p>
              </Card>
              <Card className="p-6 hover-scale transition-all duration-300 hover:shadow-xl">
                <Icon name="Rocket" className="text-primary mb-4" size={32} />
                <h4 className="font-semibold mb-2">Развитие</h4>
                <p className="text-sm text-muted-foreground">Постоянное совершенствование</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="windows11" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <img 
                src="https://cdn.poehali.dev/projects/a1f11940-11b4-4361-8742-5bafa5d4eac3/files/d57c84c0-4910-4a13-9a94-0695c13871bf.jpg" 
                alt="Windows 11"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Актуальная версия
              </div>
              <h3 className="text-5xl font-bold mb-6">Windows 11</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Самая современная операционная система с новым дизайном, 
                улучшенной производительностью и расширенными возможностями.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Новый центрированный интерфейс</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Встроенный Microsoft Teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Поддержка Android-приложений</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Улучшенная многозадачность</span>
                </li>
              </ul>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="text-base hover-scale transition-all duration-300 hover:shadow-lg" asChild>
                  <a href="https://www.microsoft.com/ru-ru/software-download/windows11" target="_blank" rel="noopener noreferrer">
                    <Icon name="Download" className="mr-2" size={20} />
                    Скачать Windows 11
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base hover-scale transition-all duration-300">
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="windows10" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block bg-muted text-muted-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                Стабильная версия
              </div>
              <h3 className="text-5xl font-bold mb-6">Windows 10</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Проверенная временем операционная система с миллиардом активных пользователей. 
                Надёжность и совместимость для вашего бизнеса.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Привычный интерфейс</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Широкая совместимость</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Регулярные обновления безопасности</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Поддержка до 2025 года</span>
                </li>
              </ul>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="text-base hover-scale transition-all duration-300 hover:shadow-lg" asChild>
                  <a href="https://www.microsoft.com/ru-ru/software-download/windows10" target="_blank" rel="noopener noreferrer">
                    <Icon name="Download" className="mr-2" size={20} />
                    Скачать Windows 10
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base hover-scale transition-all duration-300">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://cdn.poehali.dev/projects/a1f11940-11b4-4361-8742-5bafa5d4eac3/files/9b66b852-cd4b-4eda-bf36-8765c21e37f3.jpg" 
                alt="Windows 10"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="windows12" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <img 
                src="https://cdn.poehali.dev/projects/a1f11940-11b4-4361-8742-5bafa5d4eac3/files/250f42ef-7a63-49fd-8b62-bd6876ee1667.jpg" 
                alt="Windows 12 Beta"
                className="rounded-lg shadow-2xl animate-float"
              />
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Бета-версия
              </div>
              <h3 className="text-5xl font-bold mb-6">
                Windows 12 <span className="text-primary">Beta</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Взгляните в будущее! Экспериментальная версия с революционными возможностями 
                искусственного интеллекта и новым подходом к взаимодействию.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>ИИ-ассистент нового поколения</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Голографический интерфейс</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Квантовая защита данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Адаптивный рабочий стол</span>
                </li>
              </ul>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="text-base bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 hover-scale transition-all duration-300 hover:shadow-lg">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Присоединиться к бета-тестированию
                </Button>
                <Button size="lg" variant="outline" className="text-base hover-scale transition-all duration-300">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 py-12 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Windows 11</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Windows 10</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Windows 12 Beta</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Microsoft 365</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обратная связь</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Facebook" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Twitter" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Linkedin" size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Microsoft Corporation. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;