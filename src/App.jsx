import React from 'react'
import { Calendar, MapPin, Clock, Users, Heart, ExternalLink, Github, Twitter, Instagram, Linkedin } from 'lucide-react'
import './App.css'

// Import JSON data
import speakersData from './data/speakers.json'
import sponsorsData from './data/sponsors.json'
import communitiesData from './data/communities.json'
import volunteersData from './data/volunteers.json'
import organizersData from './data/organizers.json'

const App = () => {
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
                <a href="#local">Local</a>
                <a href="#ingressos" className="btn btn-primary">Ingressos</a>
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
                <span>UNIFESP - São José dos Campos</span>
              </div>
              <div className="info-item">
                <Clock className="icon" />
                <span>9h às 17h</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#ingressos" className="btn btn-primary">
                <ExternalLink className="icon" />
                Garantir Ingresso
              </a>
              <a href="#sobre" className="btn btn-secondary">Saiba Mais</a>
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
              <h3>Web & Frontend</h3>
              <p>Descubra as últimas tendências em desenvolvimento web, frameworks modernos e melhores práticas de UX/UI.</p>
              <ul className="track-topics">
                <li>React & Next.js</li>
                <li>Vue.js & Angular</li>
                <li>Web Performance</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>
            <div className="track-card">
              <div className="track-icon mobile">📱</div>
              <h3>Mobile & Flutter</h3>
              <p>Mergulhe no mundo do desenvolvimento mobile com Flutter, Android nativo e as melhores práticas mobile.</p>
              <ul className="track-topics">
                <li>Flutter Avançado</li>
                <li>Android Jetpack Compose</li>
                <li>Mobile Architecture</li>
                <li>App Store Optimization</li>
              </ul>
            </div>
            <div className="track-card">
              <div className="track-icon cloud">☁️</div>
              <h3>Cloud & DevOps</h3>
              <p>Explore o Google Cloud Platform, containerização, CI/CD e as tecnologias que estão transformando a infraestrutura.</p>
              <ul className="track-topics">
                <li>Google Cloud Platform</li>
                <li>Kubernetes & Docker</li>
                <li>Serverless Computing</li>
                <li>AI/ML no Cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Palestrantes Section */}
      <section id="palestrantes" className="section palestrantes">
        <div className="container">
          <h2 className="section-title">Palestrantes</h2>
          <div className="speakers-grid">
            {speakersData.speakers.map((speaker) => (
              <div key={speaker.id} className="speaker-card">
                <div className="speaker-image">
                  <img src={speaker.image} alt={speaker.name} onError={(e) => e.target.src = '/images/placeholder-avatar.jpg'} />
                </div>
                <h3>{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-company">{speaker.company}</p>
                <p className="speaker-bio">{speaker.bio}</p>
                {speaker.talk && (
                  <div className="speaker-talk">
                    <h4>{speaker.talk.title}</h4>
                    <p className="talk-time">{speaker.talk.time} - {speaker.talk.duration}</p>
                  </div>
                )}
                <div className="speaker-social">
                  {speaker.social.twitter && <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>}
                  {speaker.social.linkedin && <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>}
                  {speaker.social.github && <a href={speaker.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voluntários Section */}
      <section className="section voluntarios">
        <div className="container">
          <h2 className="section-title">Voluntários</h2>
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
              <img src="/images/volunteers.jpg" alt="Voluntários" onError={(e) => e.target.style.display = 'none'} />
            </div>
          </div>
        </div>
      </section>

      {/* Patrocinadores Section */}
      <section className="section patrocinadores">
        <div className="container">
          <h2 className="section-title">Patrocinadores</h2>
          <div className="sponsors-tiers">
            <div className="sponsor-tier">
              <h3>Patrocinador Diamante</h3>
              <div className="sponsors-grid diamond">
                {sponsorsData.sponsors.diamond.map((sponsor) => (
                  <div key={sponsor.id} className="sponsor-card">
                    <img src={sponsor.logo} alt={sponsor.name} onError={(e) => e.target.style.display = 'none'} />
                  </div>
                ))}
              </div>
            </div>
            <div className="sponsor-tier">
              <h3>Patrocinador Ouro</h3>
              <div className="sponsors-grid gold">
                {sponsorsData.sponsors.gold.map((sponsor) => (
                  <div key={sponsor.id} className="sponsor-card">
                    <img src={sponsor.logo} alt={sponsor.name} onError={(e) => e.target.style.display = 'none'} />
                  </div>
                ))}
              </div>
            </div>
            <div className="sponsor-tier">
              <h3>Patrocinador Prata</h3>
              <div className="sponsors-grid silver">
                {sponsorsData.sponsors.silver.map((sponsor) => (
                  <div key={sponsor.id} className="sponsor-card">
                    <img src={sponsor.logo} alt={sponsor.name} onError={(e) => e.target.style.display = 'none'} />
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
        </div>
      </section>

      {/* Comunidades Parceiras Section */}
      <section className="section comunidades">
        <div className="container">
          <h2 className="section-title">Comunidades Parceiras</h2>
          <div className="communities-grid">
            {communitiesData.partnerCommunities.map((community) => (
              <div key={community.id} className="community-card">
                <img src={community.logo} alt={community.name} onError={(e) => e.target.style.display = 'none'} />
                <h3>{community.name}</h3>
                <p>{community.description}</p>
                <div className="community-info">
                  <span className="member-count">{community.members.toLocaleString()} membros</span>
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
        </div>
      </section>

      {/* Local Section */}
      <section id="local" className="section local">
        <div className="container">
          <h2 className="section-title">Local do Evento</h2>
          <div className="venue-content">
            <div className="venue-info">
              <h3>Instituto de Ciência e Tecnologia (ICT-Unifesp), São José dos Campos - SP</h3>
              <p className="venue-address">
                <MapPin className="icon" />
                Avenida Cesare Monsueto Giulio Lattes, 1201, São José dos Campos, SP
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
                <a href="https://www.google.com/maps/search/Instituto+de+Ci%C3%AAncia+e+Tecnologia+(ICT-Unifesp),+Avenida+Cesare+Monsueto+Giulio+Lattes,+1201,+S%C3%A3o+Jos%C3%A9+dos+Campos,+SP" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <MapPin className="icon" />
                  Ver no Maps
                </a>
                <a href="#ingressos" className="btn btn-secondary">Garantir Ingresso</a>
              </div>
            </div>
            <div className="venue-map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1716933331522!2d-45.79320709999999!3d-23.1639329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4c4961eca80b%3A0xb5c1abfb834a72ab!2sInstitute%20of%20Science%20and%20Technology%20(ICT-UNIFESP)!5e0!3m2!1sen!2sbr!4v1759418037260!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1716933331522!2d-45.79320709999999!3d-23.1639329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4c4961eca80b%3A0xb5c1abfb834a72ab!2sInstitute%20of%20Science%20and%20Technology%20(ICT-UNIFESP)!5e0!3m2!1sen!2sbr!4v1759418037260!5m2!1sen!2sbr"
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
          <div className="organizers-grid">
            {organizersData.organizers.team.map((organizer) => (
              <div key={organizer.id} className="organizer-card">
                <div className="organizer-image">
                  <img src={organizer.image} alt={organizer.name} onError={(e) => e.target.src = '/images/placeholder-avatar.jpg'} />
                </div>
                <h3>{organizer.name}</h3>
                <p className="organizer-role">{organizer.role}</p>
                <p className="organizer-title">{organizer.title}</p>
                <p className="organizer-bio">{organizer.bio}</p>
                <div className="organizer-social">
                  {organizer.social.linkedin && <a href={organizer.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>}
                  {organizer.social.twitter && <a href={organizer.social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>}
                  {organizer.social.github && <a href={organizer.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>}
                </div>
              </div>
            ))}
          </div>
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
                <span className="price-info">Inclui coffee breaks, almoço e kit do evento</span>
              </div>
            </div>
            <a href="https://www.sympla.com.br/evento/devfest-sao-jose-dos-campos-2025/3127936" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              <ExternalLink className="icon" />
              Comprar Ingresso
            </a>
            <p className="ticket-note">* Temos ingressos solidários para pessoas em situação de vulnerabilidade</p>
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
                <li><a href="#local">Local</a></li>
                <li><a href="#ingressos">Ingressos</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <ul>
                <li>{organizersData.organizers.contact.general}</li>
                <li>{organizersData.organizers.contact.sponsors}</li>
                <li>{organizersData.organizers.contact.volunteers}</li>
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