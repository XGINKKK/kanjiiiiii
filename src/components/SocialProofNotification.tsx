import { useState, useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";

const femaleNames = [
  "Ana Paula",
  "Juliana",
  "Fernanda",
  "Camila",
  "Beatriz",
  "Carolina",
  "Patrícia",
  "Mariana",
  "Gabriela",
  "Amanda",
  "Rafaela",
  "Vanessa",
  "Luciana",
  "Daniela",
  "Renata",
  "Priscila",
  "Letícia",
  "Isabela",
  "Jessica",
  "Larissa",
  "Roberta",
  "Alessandra",
  "Cristina",
  "Adriana",
  "Tatiana",
  "Bruna",
  "Carla",
  "Paula",
  "Marcela",
  "Bianca"
];

const cities = [
  "São Paulo - SP",
  "Rio de Janeiro - RJ",
  "Belo Horizonte - MG",
  "Curitiba - PR",
  "Porto Alegre - RS",
  "Brasília - DF",
  "Salvador - BA",
  "Fortaleza - CE",
  "Recife - PE",
  "Manaus - AM",
  "Goiânia - GO",
  "Campinas - SP",
  "Florianópolis - SC",
  "Santos - SP",
  "Ribeirão Preto - SP"
];

interface Notification {
  id: number;
  name: string;
  city: string;
  timeAgo: string;
}

export function SocialProofNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [nextId, setNextId] = useState(1);

  const getRandomName = () => femaleNames[Math.floor(Math.random() * femaleNames.length)];
  const getRandomCity = () => cities[Math.floor(Math.random() * cities.length)];
  const getRandomTime = () => {
    const times = ["agora", "há 2 minutos", "há 5 minutos", "há 8 minutos", "há 12 minutos"];
    return times[Math.floor(Math.random() * times.length)];
  };

  const addNotification = () => {
    const newNotification: Notification = {
      id: nextId,
      name: getRandomName(),
      city: getRandomCity(),
      timeAgo: getRandomTime()
    };

    setNotifications(prev => [...prev, newNotification]);
    setNextId(prev => prev + 1);

    // Auto-remove after 6 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 6000);
  };

  useEffect(() => {
    // Show first notification after 3 seconds
    const firstTimeout = setTimeout(() => {
      addNotification();
    }, 3000);

    // Then show a new notification every 15-25 seconds
    const interval = setInterval(() => {
      addNotification();
    }, Math.random() * 10000 + 15000); // Random between 15-25 seconds

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 space-y-3 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white border-2 border-mint/30 rounded-xl shadow-2xl p-4 flex items-start gap-3 animate-in slide-in-from-left duration-500"
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-mint to-soft-blue rounded-full flex items-center justify-center flex-shrink-0">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="font-fredoka font-bold text-navy text-sm mb-1">
              {notification.name}
            </p>
            <p className="font-inter text-xs text-foreground/70 mb-1">
              adquiriu o <span className="font-semibold text-coral">Kit Kanji Kids</span>
            </p>
            <div className="flex items-center gap-2 text-xs text-foreground/50">
              <span>📍 {notification.city}</span>
              <span>•</span>
              <span>{notification.timeAgo}</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => removeNotification(notification.id)}
            className="flex-shrink-0 text-foreground/30 hover:text-foreground/60 transition-colors"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
