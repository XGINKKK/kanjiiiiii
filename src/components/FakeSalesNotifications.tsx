import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const names = [
  "Ana Silva",
  "Maria Santos",
  "Juliana Costa",
  "Fernanda Lima",
  "Carolina Souza",
  "Beatriz Oliveira",
  "Camila Rodrigues",
  "Patricia Alves",
  "Renata Martins",
  "Gabriela Ferreira",
  "Amanda Pereira",
  "Larissa Gomes",
  "Bianca Araújo",
  "Luciana Barbosa",
  "Mariana Carvalho",
  "Vanessa Rocha",
  "Aline Nascimento",
  "Roberta Castro",
  "Bruna Cardoso",
  "Claudia Dias"
];

const cities = [
  "São Paulo - SP",
  "Rio de Janeiro - RJ",
  "Belo Horizonte - MG",
  "Curitiba - PR",
  "Porto Alegre - RS",
  "Salvador - BA",
  "Brasília - DF",
  "Fortaleza - CE",
  "Recife - PE",
  "Manaus - AM",
  "Goiânia - GO",
  "Campinas - SP",
  "Santos - SP",
  "Florianópolis - SC",
  "Vitória - ES",
  "João Pessoa - PB",
  "Natal - RN",
  "Campo Grande - MS",
  "Uberlândia - MG",
  "Sorocaba - SP"
];

export const FakeSalesNotifications = () => {
  const [notification, setNotification] = useState<{ name: string; city: string; show: boolean }>({
    name: "",
    city: "",
    show: false,
  });

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];

      setNotification({
        name: randomName,
        city: randomCity,
        show: true,
      });

      // Esconder após 5 segundos
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
    };

    // Primeira notificação após 8 segundos
    const initialTimeout = setTimeout(showNotification, 8000);

    // Notificações subsequentes a cada 15-25 segundos
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 15000); // Entre 15-25 segundos

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 max-w-sm bg-white rounded-xl shadow-2xl border-2 border-coral/20 p-4 transition-all duration-500 ${
        notification.show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="w-5 h-5 text-coral" />
        </div>
        <div className="flex-1">
          <p className="font-nunito font-bold text-sm text-navy mb-1">Nova compra realizada!</p>
          <p className="font-inter text-xs text-foreground/70">
            <span className="font-semibold">{notification.name}</span> de{" "}
            <span className="font-semibold">{notification.city}</span>
          </p>
          <p className="font-inter text-xs text-mint mt-1">Há poucos minutos</p>
        </div>
      </div>
    </div>
  );
};
