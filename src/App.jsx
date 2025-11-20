import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Clock, Users, Heart, ExternalLink, Github, Twitter, Instagram, Linkedin } from 'lucide-react'
import './App.css'

// Import JSON data
import speakersData from './data/speakers.json'
import sponsorsData from './data/sponsors.json'
import communitiesData from './data/communities.json'
import volunteersData from './data/volunteers.json'
import organizersData from './data/organizers.json'

// DevFest Countdown Timer Component
function DevFestCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-11-29T09:00:00')
      const now = new Date()
      const difference = eventDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const isEventPassed = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  return (
    <div className="devfest-countdown">
      <h3 className="countdown-title">Faltam</h3>
      <div className="countdown-display">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">Dias</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">Horas</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">Min</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">Seg</span>
        </div>
      </div>
      {isEventPassed && (
        <div className="event-started">
          🎉 O DevFest começou!
        </div>
      )}
    </div>
  )
}

const App = () => {
  const [activeTrack, setActiveTrack] = useState('agenda-geral')

  // Event schedule data
  const eventSchedule = [
    { time: '09H00', activity: 'Credenciamento', description: 'Recepção dos participantes e entrega de materiais' },
    { time: '10H00', activity: 'Abertura', description: 'Cerimônia de abertura oficial do evento' },
    { time: '10H25', activity: 'Início das palestras', description: 'Início das apresentações nas três trilhas simultâneas' },
    { time: '12H00', activity: 'Almoço', description: 'Intervalo para almoço (por conta dos participantes)', note: '*' },
    { time: '14H00', activity: 'Retorno Palestras + Início Trilhas', description: 'Continuação das apresentações' },
    { time: '16H50', activity: 'Encerramento + Sorteios', description: 'Cerimônia de encerramento e premiação' }
  ]

  // Kids track activities (6-15 anos)
  const kidsActivities = [
    {
      time: '10H25',
      activity: 'Oficina de Programação',
      description: 'Desenvolvimento de uma história animada',
      type: 'programming'
    },
    {
      time: '11H00', 
      activity: 'Oficina Maker',
      description: 'Montagem da Caixinha Porta Trecos',
      type: 'maker'
    },
    {
      time: '14H00',
      activity: 'Oficina de Programação', 
      description: 'Criação de um jogo',
      type: 'programming'
    },
    {
      time: '14H50',
      activity: 'Oficina Maker',
      description: 'Montagem do Ventilador Maker',
      type: 'maker'
    },
    {
      time: '16H00',
      activity: 'Oficina de Programação',
      description: 'com Arduino e Protoboard com leds',
      type: 'programming'
    }
  ]

  // Kids Little track activities (2-5 anos)
  const kidsLittleActivities = [
    {
      time: '10H00 - 17H00',
      activity: 'Robótica Estrutural',
      description: 'É a montagem de estruturas com peças específicas sem uso de programação ou eletrônicos, que desenvolvem múltiplas habilidades nas crianças.',
      instructor: 'Nathalia Braga',
      type: 'robotics'
    }
  ]

  // Get available tracks with scheduled talks
  const availableTracks = [
    {
      id: 'agenda-geral',
      name: 'AGENDA GERAL',
      icon: '📅',
      type: 'schedule'
    },
    {
      id: 'web',
      name: 'TRILHA PRINCIPAL', 
      icon: '🌐',
      speakers: speakersData.speakers.filter(speaker => speaker.track === 'web' && speaker.talk && speaker.talk.time)
    },
    {
      id: 'experts', 
      name: 'TRILHA EXPERTS',
      icon: '⚙️',
      speakers: speakersData.speakers.filter(speaker => speaker.track === 'experts' && speaker.talk && speaker.talk.time)
    },
    {
      id: 'start',
      name: 'TRILHA START',
      icon: '🚀',
      speakers: speakersData.speakers.filter(speaker => speaker.track === 'start' && speaker.talk && speaker.talk.time)
    },
        {
      id: 'kids',
      name: 'TRILHA KIDS',
      subtitle: '6 A 15 ANOS',
      icon: '👶',
      type: 'kids'
    },
    {
      id: 'kids-little',
      name: 'TRILHA KIDS',
      subtitle: '2 A 5 ANOS',
      icon: '🎨',
      type: 'kids-little'
    },
  ].filter(track => track.type === 'schedule' || track.type === 'kids' || track.type === 'kids-little' || (track.speakers && track.speakers.length > 0))

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav-content">
              <div className="logo">
                <img src="/images/gdg-logo.svg" alt="GDG" className="logo-img" onError={(e) => e.target.style.display = 'none'} />
                <span className="logo-text">DevFest São José dos Campos</span>
              </div>
              <div className="nav-links">
                <a href="#trilhas">Trilhas</a>
                <a href="#palestrantes">Palestrantes</a>
                <a href="#agenda">Agenda</a>
                <a href="#local">Local</a>
                <a href="#ingressos" className="btn btn-primary text-color-white">Ingressos</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">DevFest São José dos Campos 2025</h1>
            <p className="hero-subtitle">
              O maior evento de tecnologia da região! Junte-se a nós para um dia repleto de 
              aprendizado, networking e inovação com três trilhas simultâneas.
            </p>
            <div className="hero-info">
              <div className="info-item">
                <Calendar className="icon" />
                <span>29 de Novembro, 2025</span>
              </div>
              <div className="info-item">
                <MapPin className="icon" />
                <span>PiT - Parque Tecnológico - São José dos Campos</span>
              </div>
              <div className="info-item">
                <Clock className="icon" />
                <span>9h às 17h</span>
              </div>
            </div>

            <small>* Evento sem fins lucrativos</small>
            <DevFestCountdown />
            <div className="hero-actions">
              <a href="#ingressos" className="btn btn-primary">
                <ExternalLink className="icon" />
                Garantir Ingresso
              </a>
              <a href="#palestrantes" className="btn btn-secondary">Saiba Mais</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trilhas Section */}
      <section id="trilhas" className="section trilhas">
        <div className="container">
          <h2 className="section-title">Trilhas Simultâneas</h2>
          <div className="tracks-grid">
            <div className="track-card">
              <div className="track-icon web">🌐</div>
              <h3>Principal</h3>
              <p>Descubra as últimas tendências em desenvolvimento por especialistas da área.
              </p>
              <ul className="track-topics">
                <li>GDE (Google Developer Expert)</li>
                <li>Web Development</li>
                <li>IA (Inteligência Artificial)</li>
              </ul>
            </div>
             <div className="track-card">
              <div className="track-icon cloud">☁️</div>
              <h3>Experts</h3>
              <p>Explore uso de tecnologias no desenvolvimento para o dia a dia no trabalho.
              </p>
              <ul className="track-topics">
                <li>Backend</li>
                <li>Frontend</li>
                <li>AI/ML no Cloud</li>
              </ul>
            </div>
            <div className="track-card">
              <div className="track-icon mobile">📱</div>
              <h3>Start</h3>
              <p>Mergulhe no mundo do desenvolvimento e descubra as melhoras praticas para sua carreira.</p>
              <ul className="track-topics">
                <li>Dicas de carreira</li>
                <li>Networking</li>
                <li>Inovação</li>
              </ul>
            </div>
           
          </div>
          <br />
            <div className="track-card">
              <div className="track-icon mobile">👶</div>
              <h3>Kids</h3>
              <p>Pensando em um ambiente incluso, vocês podem trazer suas crianças!</p>
              <ul className="track-topics">
                <li> 👶  0 a 3 anos: podem curtir o evento junto com os pais.</li>
                <li> 🎨  4 a 5 anos: participam da Trilha Criativa, com atividades de desenho e expressão artística.</li>
                <li> ⚙️  6 anos ou mais: vão se divertir na Trilha Maker, com oficinas de ciência e tecnologia em parceria com a MV Cultura Maker.</li>
                <li> * Os pais são 100% responsáveis pelas crianças durante o evento.</li>
                <li> ** É necessário que a criança esteja registrada no evento para participar das atividades.</li>
                <li> *** O ingresso Kids é gratuito e exclusivo para crianças de participantes inscritos no evento.</li>
                <li> **** 🔹 Observação: Para adquirir o ingresso da criança, é necessário informar o número de inscrição do responsável.
Por isso, o adulto deve realizar sua inscrição primeiro antes de garantir a vaga da criança.</li>
              </ul>
            </div>
        </div>
      </section>

       {/* Agenda Section */}
      <section id="agenda" className="section agenda">
        <div className="container">
          <h2 className="section-title">Agenda</h2>
          
          {availableTracks.length > 0 ? (
            <div className="agenda-tabs-container">
              {/* Tabs Navigation */}
              <div className="tabs-navigation">
                {availableTracks.map((track) => (
                  <button
                    key={track.id}
                    className={`tab-button ${activeTrack === track.id ? 'active' : ''} ${track.type === 'kids' || track.type === 'kids-little' ? 'kids-tab' : ''}`}
                    onClick={() => setActiveTrack(track.id)}
                  >
                    <span className="tab-icon">{track.icon}</span>
                    <div className="tab-text">
                      <span className="tab-name">{track.name}</span>
                      {track.subtitle && (
                        <span className="tab-subtitle">{track.subtitle}</span>
                      )}
                    </div>
                    {track.type !== 'schedule' && track.type !== 'kids' && track.type !== 'kids-little' && (
                      <span className="tab-count">{track.speakers.length}</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="tab-content">
                {availableTracks.map((track) => (
                  <div
                    key={track.id}
                    className={`agenda-track ${activeTrack === track.id ? 'active' : ''}`}
                  >
                    <div className="agenda-content">
                      {/* Agenda Geral */}
                      {track.type === 'schedule' ? (
                        <div className="general-schedule">
                          <div className="schedule-header">
                            <h3>Programação do DevFest São José dos Campos 2025</h3>
                            <p>29 de Novembro - PiT Parque Tecnológico</p>
                          </div>
                          <div className="schedule-grid">
                            {eventSchedule.map((item, index) => (
                              <div key={index} className="schedule-item general-item">
                                <div className="schedule-time">
                                  <span className="time general-time">{item.time}</span>
                                </div>
                                <div className="schedule-content general-content">
                                  <div className="activity-info">
                                    <h3>{item.activity}</h3>
                                    <p>{item.description}</p>
                                    {item.note && (
                                      <p className="activity-note">* por conta dos participantes</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="coffee-break-info">
                            <p><strong>Coffee break garantido:</strong> 9h e 15h35</p>
                          </div>
                        </div>
                      ) : track.type === 'kids' ? (
                        /* Trilha Kids */
                        <div className="kids-schedule">
                          <div className="schedule-header">
                            <h3>Trilha Kids - Atividades para crianças</h3>
                            <p>Com <strong>Marcus Valerio</strong> ou <strong>Tio Marquinhos</strong></p>
                            <div className="partnership-info">
                              <img src="/images/mv-cultura-maker-logo.png" alt="MV Cultura Maker" className="partner-logo" 
                                   onError={(e) => {
                                     e.target.src = 'https://via.placeholder.com/120x60/34a853/ffffff?text=MV+CULTURA+MAKER'
                                   }} />
                            </div>
                          </div>
                          <div className="instructor-section">
                            <div className="instructor-card">
                              <div className="instructor-avatar">
                                <img src="/images/speakers/marcus.jpeg" alt="Marcus Valerio" 
                                     onError={(e) => {
                                       e.target.src = `https://ui-avatars.com/api/?name=Marcus+Valerio&size=120&background=34a853&color=ffffff&bold=true&format=png`
                                     }} />
                              </div>
                              <div className="instructor-info">
                                <h4>Marcus Valerio</h4>
                              </div>
                            </div>
                          </div>
                          <div className="schedule-grid">
                            {kidsActivities.map((item, index) => (
                              <div key={index} className={`schedule-item kids-item ${item.type}`}>
                                <div className="schedule-time">
                                  <span className="time kids-time">{item.time}</span>
                                </div>
                                <div className="schedule-content kids-content">
                                  <div className="activity-info">
                                    <h3>
                                      <span className={`activity-type ${item.type}`}>
                                        {item.type === 'programming' ? '💻' : '🔧'}
                                      </span>
                                      {item.activity}
                                    </h3>
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="kids-info">
                            <p><strong>Idades:</strong> 6 a 15 anos</p>
                            <p><strong>Responsabilidade:</strong> Os pais são 100% responsáveis pelas crianças durante o evento</p>
                          </div>
                        </div>
                      ) : track.type === 'kids-little' ? (
                        /* Trilha Kids Little (2-5 anos) */
                        <div className="kids-little-schedule">
                          <div className="schedule-header">
                            <h3>Trilha Kids - Atividades para crianças pequenas</h3>
                            <p>Com <strong>Nathalia Braga</strong></p>
                            <div className="partnership-info">
                              <img src="/images/unimate-maker-logo.png" alt="Unimate Maker" className="partner-logo unimate" 
                                   onError={(e) => {
                                     e.target.src = 'https://via.placeholder.com/150x80/ff6b9d/ffffff?text=UNIMATE+MAKER'
                                   }} />
                            </div>
                          </div>
                          <div className="instructor-section">
                            <div className="instructor-card">
                              <div className="instructor-avatar">
                                <img src="/images/speakers/natalia.jpeg" alt="Nathalia Braga" 
                                     onError={(e) => {
                                       e.target.src = `https://ui-avatars.com/api/?name=Nathalia+Braga&size=120&background=ff6b9d&color=ffffff&bold=true&format=png`
                                     }} />
                              </div>
                              <div className="instructor-info">
                                <h4>Nathalia Braga</h4>
                              </div>
                            </div>
                          </div>
                          <div className="schedule-grid">
                            {kidsLittleActivities.map((item, index) => (
                              <div key={index} className="schedule-item kids-little-item robotics">
                                <div className="schedule-time">
                                  <span className="time kids-little-time">{item.time}</span>
                                </div>
                                <div className="schedule-content kids-little-content">
                                  <div className="activity-info">
                                    <h3>
                                      <span className="activity-type robotics">🤖</span>
                                      {item.activity}
                                    </h3>
                                    <p className="activity-description">{item.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="kids-little-info">
                            <p><strong>Idades:</strong> 2 a 5 anos</p>
                            <p><strong>Atividade:</strong> Robótica Estrutural contínua durante todo o evento</p>
                            <p><strong>Responsabilidade:</strong> Os pais são 100% responsáveis pelas crianças durante o evento</p>
                          </div>
                        </div>
                      ) : (
                        /* Trilhas de Palestrantes */
                        <>
                          <div className="schedule-grid">
                            {track.speakers
                              .sort((a, b) => {
                                const timeA = a.talk.time.replace('H', ':');
                                const timeB = b.talk.time.replace('H', ':');
                                return timeA.localeCompare(timeB);
                              })
                              .map((speaker) => (
                              <div key={speaker.name} className="schedule-item">
                                <div className="schedule-time">
                                  <span className="speaker-name">{speaker.name.toUpperCase()}</span>
                                  <span className="time">{speaker.talk.time}</span>
                                </div>
                                <div className="schedule-content">
                                  <div className="speaker-avatar">
                                    <img 
                                      src={speaker.image} 
                                      alt={speaker.name} 
                                      onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&size=80&background=4285f4&color=ffffff&bold=true&format=png`
                                      }} 
                                    />
                                  </div>
                                  <div className="talk-info">
                                    <h3>{speaker.talk.title}</h3>
                                    {/* <p>{speaker.talk.description}</p> */}
                                    {speaker.talk.duration && (
                                      <p className="talk-duration">Duração: {speaker.talk.duration}</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer da agenda */}
              <div className="agenda-footer">
                <div className="sponsor-logos">
                  <img src="/images/gdg-logo.png" alt="GDG SJC" className="sponsor-logo gdg" 
                       onError={(e) => e.target.style.display = 'none'} />
                  <img src="/images/wtm-logo.png" alt="WTM SJC" className="sponsor-logo wtm" 
                       onError={(e) => e.target.style.display = 'none'} />
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <h3>Em breve</h3>
              <p>A programação detalhada com horários será divulgada em breve.</p>
            </div>
          )}
        </div>
      </section>

      {/* Palestrantes Section */}
      <section id="palestrantes" className="section palestrantes">
        <div className="container">
          <h2 className="section-title">Palestrantes</h2>
          {speakersData.speakers.length > 0 ? (
            <div className="speakers-grid">
              {speakersData.speakers.map((speaker) => (
              <div key={speaker.id} className="speaker-card">
                <div className="speaker-image">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&size=240&background=4285f4&color=ffffff&bold=true&format=png`
                    }} 
                  />
                </div>
                <h3>{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-company">{speaker.company}</p>
                <p className="speaker-bio">{speaker.bio}</p>
                {speaker.talk && (
                  <div className="speaker-talk">
                    <h4>{speaker.talk.title}</h4>
                <p className="speaker-bio">{speaker.talk.description}</p>
                {speaker.talk.time && speaker.talk.duration && (
                  <p className="talk-time">{speaker.talk.time} - {speaker.talk.duration}</p>
                )}
                  </div>
                )}
                <div className="speaker-social">
                  {speaker.social.twitter && <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>}
                  {speaker.social.linkedin && <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>}
                  {speaker.social.github && <a href={speaker.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>}
                  {speaker.social.instagram && <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>}
                </div>
              </div>
            ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Em breve</h3>
              <p>Os palestrantes serão anunciados em breve. Fique ligado!</p>
            </div>
          )}
        </div>
      </section>

      {/* Voluntários Section */}
      <section className="section voluntarios">
        <div className="container">
          <h2 className="section-title">Voluntários</h2>
          {volunteersData.volunteers.roles && volunteersData.volunteers.roles.length > 0 ? (
            <div className="volunteers-content">
            <div className="volunteers-text">
              <h3>{volunteersData.volunteers.info.title}</h3>
              <p>{volunteersData.volunteers.info.description}</p>
              <div className="volunteer-benefits">
                {volunteersData.volunteers.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="benefit">
                    <Heart className="icon" />
                    <span>{benefit.title}</span>
                  </div>
                ))}
              </div>
              <a href={`mailto:${volunteersData.volunteers.info.contactEmail}`} className="btn btn-primary">
                Quero Ser Voluntário
              </a>
            </div>
            <div className="volunteers-image">
              <img 
                src="/images/volunteers.jpg" 
                alt="Voluntários" 
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=faces&auto=format&q=80'
                }} 
              />
            </div>
          </div>
          ) : (
            <div className="empty-state">
              <h3>Em breve</h3>
              <p>As informações sobre voluntários serão divulgadas em breve.</p>
            </div>
          )}
        </div>
      </section>

      {/* Patrocinadores Section */}
      <section className="section patrocinadores">
        <div className="container">
          <h2 className="section-title">Patrocinadores</h2>
          {(sponsorsData.sponsors.diamond?.length > 0 || sponsorsData.sponsors.gold?.length > 0 || sponsorsData.sponsors.silver?.length > 0) ? (
            <>
              <div className="sponsors-tiers">
            <div className="sponsor-tier">
              {sponsorsData.sponsors?.diamond?.length > 0 && <h3>Cota Parque Tecnológico</h3>}
              <div className="sponsors-grid diamond">
                {sponsorsData.sponsors?.diamond.map((sponsor) => (
                  <div key={sponsor.id} className="sponsor-card">
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x150/b9f2ff/4285f4?text=${encodeURIComponent(sponsor.name)}`
                      }} 
                    />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="sponsor-tier">
            {
              sponsorsData.sponsors?.gold?.length > 0 && <h3>Cota Ponte Estaiada</h3>
            }
              <div className="sponsors-grid gold">
                {sponsorsData.sponsors?.gold?.map((sponsor) => (
                  <div key={sponsor.id} className="sponsor-card">
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer">

                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/250x125/ffd700/4285f4?text=${encodeURIComponent(sponsor.name)}`
                        }} 
                    />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="sponsor-tier">
            {
              sponsorsData.sponsors?.silver?.length > 0 && <h3>Cota Exchange</h3>
            }
              <div className="sponsors-grid silver">
                {sponsorsData.sponsors?.silver?.map((sponsor) => (
                  <div key={sponsor.id} className="sponsor-card">
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer">

                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/200x100/c0c0c0/4285f4?text=${encodeURIComponent(sponsor.name)}`
                        }} 
                    />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="sponsor-tier">
            {
              sponsorsData.sponsors?.support?.length > 0 && <h3>Apoio</h3>
            }
              <div className="sponsors-grid support">
                {sponsorsData.sponsors?.support?.map((sponsor) => (
                  <div key={sponsor.id} className="sponsor-card">
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer">

                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/200x100/c0c0c0/4285f4?text=${encodeURIComponent(sponsor.name)}`
                        }} 
                    />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="become-sponsor">
            <h3>Seja um Patrocinador</h3>
            <p>Conecte sua marca com a comunidade de desenvolvedores mais vibrante da região.</p>
            <a href={`mailto:${organizersData.organizers.contact.sponsors}`} className="btn btn-secondary">
              Saiba Como Patrocinar
            </a>
          </div>
          </>
          ) : (
            <div className="empty-state">
              <h3>Em breve</h3>
              <p>Os patrocinadores serão anunciados em breve.</p>
            </div>
          )}
        </div>
      </section>

      {/* Comunidades Parceiras Section */}
      <section className="section comunidades">
        <div className="container">
          <h2 className="section-title">Comunidades Parceiras</h2>
          {communitiesData.partnerCommunities?.length > 0 ? (
            <div className="communities-grid">
              {communitiesData.partnerCommunities.map((community) => (
              <div key={community.id} className="community-card ">
                <img 
                  src={community.logo} 
                  alt={community.name} 
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(community.name)}&size=160&background=fbbc04&color=4285f4&bold=true&format=png`
                  }} 
                />
                <h3>{community.name}</h3>
                <p>{community.description}</p>
                <div className="community-info">
                  {/* <span className="member-count">{community.members.toLocaleString()} membros</span> */}
                  <span className="location">{community.location}</span>
                </div>
                <div className="community-links">
                  {community.social.website && <a href={community.social.website} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>}
                  {community.social.instagram && <a href={community.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>}
                  {community.social.linkedin && <a href={community.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>}
                </div>
              </div>
            ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Em breve</h3>
              <p>As comunidades parceiras serão anunciadas em breve.</p>
            </div>
          )}
        </div>
      </section>

      {/* Local Section */}
      <section id="local" className="section local">
        <div className="container">
          <h2 className="section-title">Local do Evento</h2>
          <div className="venue-content">
            <div className="venue-info">
              <h3>PiT - Parque Tecnológico, São José dos Campos - SP</h3>
              <p className="venue-address">
                <MapPin className="icon" />
               Av Dr. Altino Bondesan, 500 - Eugênio de Melo, São José dos Campos - SP, 12247-016
              </p>
              <div className="venue-details">
                <div className="detail">
                  <Users className="icon" />
                  <span>Capacidade para 300+ pessoas</span>
                </div>
                <div className="detail">
                  <Calendar className="icon" />
                  <span>Auditórios modernos</span>
                </div>
                <div className="detail">
                  <MapPin className="icon" />
                  <span>Fácil acesso e estacionamento gratuito</span>
                </div>
              </div>
              <div className="venue-actions">
                <a href="https://maps.app.goo.gl/S3wQCMDDo93VcHyK6" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <MapPin className="icon" />
                  Ver no Maps
                </a>
                <a href="#ingressos" className="btn btn-secondary">Garantir Ingresso</a>
              </div>
            </div>
            <div className="venue-map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1716933331522!2d-45.79320709999999!3d-23.1639329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4c4961eca80b%3A0xb5c1abfb834a72ab!2sInstitute%20of%20Science%20and%20Technology%20(ICT-UNIFESP)!5e0!3m2!1sen!2sbr!4v1759418037260!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4067360876925!2d-45.790250099999994!3d-23.155350699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4c345d24cd69%3A0x3baf325177feb8a0!2sTechnology%20Park%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos!5e0!3m2!1sen!2sbr!4v1762292115479!5m2!1sen!2sbr"
                width="100%"
                height="300"
                style={{border: 0, borderRadius: '12px'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Local do DevFest"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Organizadores Section */}
      <section className="section organizadores">
        <div className="container">
          <h2 className="section-title">Equipe Organizadora</h2>
          {organizersData.organizers.team.length > 0 ? (
            <div className="organizers-grid">
              {organizersData.organizers.team.map((organizer) => (
              <div key={organizer.id} className="organizer-card">
                <div className="organizer-image">
                  <img 
                    src={organizer.image} 
                    alt={organizer.name} 
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(organizer.name)}&size=200&background=34a853&color=ffffff&bold=true&format=png`
                    }} 
                  />
                </div>
                <h3>{organizer.name}</h3>
                <p className="organizer-role">{organizer.role}</p>
                <p className="organizer-title">{organizer.title}</p>
                <p className="organizer-bio">{organizer.bio}</p>
                <div className="organizer-social">
                  {organizer.social.instagram && <a href={organizer.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>}
                  {organizer.social.linkedin && <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>}
                  {organizer.social.twitter && <a href={organizer.social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>}
                  {organizer.social.github && <a href={organizer.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>}
                </div>
              </div>
            ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Em breve</h3>
              <p>A equipe organizadora será apresentada em breve.</p>
            </div>
          )}
        </div>
      </section>

     

      {/* CTA Ingressos Section */}
      <section id="ingressos" className="section cta-ingressos">
        <div className="container">
          <div className="cta-content">
            <h2>Garanta Seu Ingresso Agora!</h2>
            <p>Não perca a oportunidade de participar do maior evento de tecnologia da região. Vagas limitadas!</p>
            <div className="ticket-info">
              <div className="ticket-price">
                {/* <span className="price">R$ 50,00</span> */}
                <span className="price-info">Inclui coffee breaks e kit do evento</span>
              </div>
            </div>
            <a href="https://www.sympla.com.br/evento/devfest-sao-jose-dos-campos-2025/3127936" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              <ExternalLink className="icon" />
              Comprar Ingresso
            </a>
            <p className="ticket-note">* Temos ingressos solidários para pessoas em situação de vulnerabilidade, entre contato pelas redes sociais ou email</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>DevFest São José dos Campos</h3>
              <p>Evento organizado pelo Google Developer Groups São José dos Campos</p>
              <div className="social-links">
                <a href={organizersData.organizers.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </a>
                <a href={organizersData.organizers.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} />
                </a>
                <a href={organizersData.organizers.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href={organizersData.organizers.social.github} target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#trilhas">Trilhas</a></li>
                <li><a href="#palestrantes">Palestrantes</a></li>
                <li><a href="#agenda">Agenda</a></li>
                <li><a href="#local">Local</a></li>
                <li><a href="#ingressos">Ingressos</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <ul>
                <li>{organizersData.organizers.contact.general}</li>
                {/* <li>{organizersData.organizers.contact.sponsors}</li>
                <li>{organizersData.organizers.contact.volunteers}</li> */}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 GDG São José dos Campos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}



export default App