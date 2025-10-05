import React, { useState, useEffect } from 'react';
import firstvideofarmer from "../assets/firstvideofarmer.mp4";
import astrosatellitevideo from "../assets/astrosatellitevideo.mp4";
import teacherstudent from "../assets/teacherstudent.mp4";


function StellarStories() {
  const [stars, setStars] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const starArray = [];
    for (let i = 0; i < 100; i++) {
      starArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2
      });
    }
    setStars(starArray);
  }, []);

  const facts = [
    "🌟 The Sun is 4.6 billion years old!",
    "☀️ The Sun's core is 27 million degrees Fahrenheit!",
    "🌈 Solar flares can cause beautiful auroras on Earth!",
    "⚡ A solar storm can travel 1 million miles per hour!"
  ];

  const videoData = [
  {
    id: "video1",
    url: firstvideofarmer,
    title: "Impact of Space Weather on Farmers",
    description:
      "Space weather, like solar storms, can disrupt GPS satellites farmers use for precise planting and harvesting, causing machinery errors and confusion. These disturbances highlight how reliant agriculture is on space-based technology. Awareness and preparation help farmers minimize space weather impacts while sometimes enjoying stunning auroras in the sky.",
    character: "🌾",
    duration: "1:38",
    theme: "farmer",
  },
  {
    id: "video2",
    url: astrosatellitevideo,
    title: "Impact of Space Weather on Astronauts",
    description:
      "Space weather from solar storms exposes astronauts to dangerous radiation, requiring them to seek shelter in shielded areas and shut down sensitive equipment. Ground teams vigilantly monitor conditions and guide safety protocols to protect crews aboard space stations. Despite the risks, solar storms can create spectacular auroras visible from space, showing the dramatic sun-Earth connection.",
    character: "🛰️",
    duration: "2:16",
    theme: "astronaut",
  },
  {
      id: "video3",
      url: teacherstudent,
      title: "Learning About Space Weather in School",
      description:
        "Teachers and students explore the fascinating world of space weather through interactive lessons and experiments. Understanding solar storms, auroras, and their effects on Earth helps students appreciate the connection between the Sun and our daily lives. Learning about space weather prepares the next generation to understand and protect our technology-dependent world.",
      character: "📚",
      duration: "2:05",
      theme: "teacher",
    },
    
  ];
  const VideoPage = ({ video }) => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const pageStyles = {
      farmer: {
        background: 'linear-gradient(to bottom, #87CEEB 0%, #98D8C8 50%, #6B8E23 100%)',
        accentColor: '#8B4513',
        emoji1: '🌾',
        emoji2: '🚜',
        emoji3: '🌻',
        emoji4: '☀️',
        title: 'Space Weather for Farmers'
      },
      astronaut: {
        background: 'linear-gradient(to bottom, #000428 0%, #004e92 50%, #1a1a2e 100%)',
        accentColor: '#00d4ff',
        emoji1: '🛰️',
        emoji2: '👨‍🚀',
        emoji3: '🚀',
        emoji4: '🌌',
        title: 'Astronauts & Satellite Monitoring'
      },
      teacher: {
        background: 'linear-gradient(to bottom, #FFF8DC 0%, #FFE4B5 50%, #F0E68C 100%)',
        accentColor: '#FF6347',
        emoji1: '📚',
        emoji2: '👩‍🏫',
        emoji3: '🎓',
        emoji4: '🔬',
        title: 'Learning About Space Weather'
      }
    };

    const quizData = {
      farmer: [
        {
          question: "What was Bob's secret helper in farming?",
          options: ["His dog", "GPS satellites in space", "His neighbors", "A magic wand"],
          correct: 1
        },
        {
          question: "What caused Bob's tractor to get confused?",
          options: ["Rain and thunder", "A solar storm from the Sun", "Broken wheels", "Too much mud"],
          correct: 1
        },
        {
          question: "Where did the GPS think Bob's tractor was located?",
          options: ["In his neighbor's field", "At the market", "In the middle of the ocean", "On a mountain"],
          correct: 2
        },
        {
          question: "What beautiful thing appeared in the sky that evening?",
          options: ["Rainbow", "Shooting stars", "Auroras (dancing lights)", "Flying birds"],
          correct: 2
        },
        {
          question: "What is the main lesson of this story?",
          options: ["Tractors don't work in winter", "Space storms can affect technology but also create beautiful auroras", "Farmers should only work at night", "GPS never makes mistakes"],
          correct: 1
        }
      ],
      astronaut: [
        {
          question: "Where were the astronauts when the solar storm warning sounded?",
          options: ["On a farm", "Inside a shiny white space station", "In a rocket on Earth", "On the Moon"],
          correct: 1
        },
        {
          question: "What is a solar storm made of?",
          options: ["Water and wind", "Energy and invisible particles from the Sun", "Chocolate and candies", "Rain and clouds"],
          correct: 1
        },
        {
          question: "How did the astronauts protect themselves during the solar storm?",
          options: ["They wore raincoats", "They went out for a walk", "They moved into a special shielded part of the space station", "They ignored the warning"],
          correct: 2
        },
        {
          question: "What beautiful event did Mia see through the window during the storm?",
          options: ["A shooting star", "An alien spaceship", "Aurora — colorful lights in the Earth's sky", "A rainbow on the Moon"],
          correct: 2
        },
        {
          question: "What is the main lesson of this story?",
          options: ["Space storms never happen", "Space weather is invisible but can affect astronauts, and it can also make magical auroras", "Astronauts don't need to work in space", "You can eat candy during a solar storm"],
          correct: 1
        }
      ],
     teacher: [
  {
    question: "What did Ms. Kaira bring to class at the start of the story?",
    options: ["A rainbow", "A glowing orange ball", "A globe", "A jar of stars"],
    correct: 1
  },
  {
    question: "How does the Sun “talk” to Earth, according to Ms. Kaira?",
    options: ["With words", "By email", "Through space weather", "By sending letters"],
    correct: 2
  },
  {
    question: "What can happen when the Sun sends powerful bursts of energy toward Earth?",
    options: ["It starts raining", "Electricity can go out and satellites get confused", "Everything turns blue", "Flowers bloom"],
    correct: 1
  },
  {
    question: "What beautiful natural phenomenon do solar storms sometimes cause?",
    options: ["Rainbows", "Snowstorms", "Auroras", "Shooting stars"],
    correct: 2
  },
  {
    question: "Why does NASA use satellites to watch the Sun every day?",
    options: ["To count its sunspots", "To listen to space music", "To warn us before a solar storm arrives", "To take Sun selfies"],
    correct: 2
  }
]

    };

    const style = pageStyles[video.theme];
    const questions = quizData[video.theme] || [];

    const detailedContent = {
  farmer: {
    mainText: "Space weather plays a crucial role in modern agriculture! Solar storms and geomagnetic disturbances can affect GPS systems used in precision farming, disrupt radio communications in rural areas, and impact satellite-based weather forecasting that farmers rely on for crop planning.",
    points: [
      "Solar flares can interfere with GPS-guided tractors and farming equipment",
      "Geomagnetic storms may disrupt rural communication networks",
      "Satellite weather forecasting can be affected during intense solar activity",
      "Precision agriculture depends on accurate GPS positioning for planting and harvesting",
      "Farmers monitor space weather forecasts to plan critical operations"
    ],
    image: "🌾🚜",
    sidebarTitle: "☀️ About Solar Storms",
    sidebarText: "Solar storms are powerful bursts of energy and particles released from the Sun. They can cause stunning auroras on Earth but also disrupt satellites, power grids, and communication systems. These storms occur when the Sun's magnetic energy suddenly changes and ejects charged particles into space — sometimes reaching Earth's atmosphere in just a few days.",
    videoTitle: "🌐 How GPS is Affected by Solar Storms",
    sidebarVideoUrl: "/videos/solarstorm.mp4",
    contentVideoUrl: "/videos/satellietgps.mp4"
  },
  astronaut: {
    mainText: "Astronauts and satellites face direct exposure to space weather events! Understanding solar activity is critical for mission planning, spacewalk scheduling, and protecting sensitive equipment. Satellites monitor the Sun 24/7 to provide early warnings of dangerous solar storms.",
    points: [
      "Solar radiation can damage satellite electronics and solar panels",
      "International Space Station adjusts operations based on solar forecasts",
      "Astronauts must take shelter in shielded areas during major solar storms",
      "Spacewalks are postponed when radiation levels are elevated",
      "Communication with Earth can be disrupted during geomagnetic storms"
    ],
    image: "🛰️👨‍🚀",
    sidebarTitle: "🛡️ Radiation Protection",
    sidebarText: "Space radiation comes from three main sources: galactic cosmic rays, solar particle events, and radiation trapped in Earth's magnetic field. During solar storms, radiation levels can spike dramatically, requiring astronauts to take shelter in specially shielded areas of their spacecraft. Long-duration missions require advanced protection systems and constant monitoring.",
    videoTitle: "🌌 Astronauts and Solar Radiation",
    sidebarVideoUrl: "/videos/spacewalk.mp4",
    contentVideoUrl: "/videos/radiation.mp4"
  },
  teacher: {
    mainText: "Education about space weather is essential for the next generation! Teachers help students understand how the Sun affects Earth, the importance of space weather forecasting, and careers in space science. Hands-on experiments and interactive lessons make complex concepts accessible and exciting for young learners.",
    points: [
      "Students learn how solar storms can affect everyday technology like smartphones and GPS",
      "Educational programs inspire future scientists and engineers who will protect our technological infrastructure",
      "Interactive demonstrations help students visualize invisible space weather phenomena",
      "Classroom experiments connect abstract concepts to real-world impacts",
      "STEM education includes space weather as an interdisciplinary topic"
    ],
    image: "📚👩‍🏫",
    sidebarTitle: "📚 Educational Approach",
    sidebarText: "This video uses inquiry-based learning to help students understand complex solar phenomena. Through visual aids, hands-on demonstrations, and relatable examples, the teacher makes space weather accessible to learners of all ages. The lesson aligns with STEM education standards and encourages critical thinking about Earth-Sun interactions.",
    videoTitle: "🔬 Classroom Solar Science Demonstration",
    sidebarVideoUrl: "/videos/classroom.mp4",
    contentVideoUrl: "/videos/solarexperiment.mp4"
  }
};

    const content = detailedContent[video.theme];

    const handleAnswerSelect = (questionIndex, answerIndex) => {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answerIndex
      });
    };

    const handleSubmitQuiz = () => {
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correct) {
          correctCount++;
        }
      });
      setScore(correctCount);
      setShowResults(true);
    };

    const resetQuiz = () => {
      setSelectedAnswers({});
      setShowResults(false);
      setScore(0);
      setShowQuiz(false);
    };

    return (
      <div style={{ minHeight: '100vh', background: style.background, position: 'relative', overflow: 'auto', paddingBottom: '40px', width: '100%' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {stars.map(star => (
            <div
              key={star.id}
              style={{
                position: 'absolute',
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `twinkle ${star.duration}s infinite`
              }}
            />
          ))}
        </div>

        <div style={{ position: 'fixed', top: '8%', right: '5%', fontSize: '70px', animation: 'float 6s ease-in-out infinite', zIndex: 0 }}>{style.emoji1}</div>
        <div style={{ position: 'fixed', top: '55%', left: '3%', fontSize: '60px', animation: 'float 5s ease-in-out infinite', zIndex: 0 }}>{style.emoji2}</div>
        <div style={{ position: 'fixed', bottom: '12%', right: '8%', fontSize: '65px', animation: 'rotate 20s linear infinite', zIndex: 0 }}>{style.emoji3}</div>
        <div style={{ position: 'fixed', top: '30%', right: '12%', fontSize: '55px', animation: 'pulse 3s ease-in-out infinite', zIndex: 0 }}>{style.emoji4}</div>
        <div style={{ position: 'fixed', top: '70%', right: '3%', fontSize: '50px', animation: 'float 7s ease-in-out infinite', zIndex: 0 }}>{style.emoji1}</div>
        <div style={{ position: 'fixed', bottom: '25%', left: '7%', fontSize: '55px', animation: 'pulse 4s ease-in-out infinite', zIndex: 0 }}>{style.emoji3}</div>

        <div style={{ position: 'relative', zIndex: 2, padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '25px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#000000',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              marginBottom: '30px',
              fontFamily: "'Comic Sans MS', sans-serif"
            }}
          >
            ← Back to Home
          </button>

          <div style={{
            background: 'rgba(248, 250, 252, 0.85)',
            padding: '40px 35px',
            borderRadius: '25px',
            backdropFilter: 'blur(10px)',
            border: `3px solid ${style.accentColor}`,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            maxWidth: '1100px',
            margin: '0 auto 30px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
                <div style={{ fontSize: '120px', marginBottom: '10px', filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))' }}>{video.character}</div>
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h1 style={{
                  fontSize: '42px',
                  color: style.accentColor,
                  margin: '0 0 15px 0',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                  fontFamily: "'Comic Sans MS', sans-serif"
                }}>{style.title}</h1>
                <p style={{
                  fontSize: '18px',
                  color: '#555',
                  margin: '0 0 12px 0',
                  lineHeight: '1.6'
                }}>{video.description}</p>
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    padding: '8px 16px',
                    borderRadius: '15px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: style.accentColor
                  }}>
                    ⏱️ Duration: {video.duration}
                  </div>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    padding: '8px 16px',
                    borderRadius: '15px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: style.accentColor
                  }}>
                    🎯 Kid-Friendly
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '30px',
            justifyContent: 'center'
          }}>
            <div style={{
              flex: '1 1 480px',
              maxWidth: '550px',
              background: 'rgba(248, 250, 252, 0.85)',
              padding: '25px',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              border: `3px solid ${style.accentColor}`
            }}>
              <h2 style={{
  fontSize: '26px',
  color: style.accentColor,
  marginTop: 0,
  marginBottom: '15px',
  fontFamily: "'Comic Sans MS', sans-serif"
}}>📖 About This Video</h2>

<p style={{
  fontSize: '16px',
  lineHeight: '1.7',
  color: '#333',
  marginBottom: '15px'
}}>
  {content.mainText}
</p>

<h3 style={{
  fontSize: '20px',
  color: style.accentColor,
  marginBottom: '10px',
  fontFamily: "'Comic Sans MS', sans-serif"
}}>Key Topics:</h3>

<ul style={{
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#333',
  paddingLeft: '20px',
  marginBottom: '20px'
}}>
  {content.points.map((point, idx) => (
    <li key={idx} style={{ marginBottom: '8px' }}>{point}</li>
  ))}
</ul>

{/* 🌍 Added WebP video section below Key Topics */}
<div style={{
  marginTop: '20px',
  textAlign: 'center'
}}>
  <h3 style={{
    fontSize: '18px',
    color: style.accentColor,
    marginBottom: '10px',
    fontFamily: "'Comic Sans MS', sans-serif"
  }}>
    🌐 How GPS is Affected by Solar Storms
  </h3>

  <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: '100%',
    maxWidth: '480px',
    borderRadius: '15px',
    border: `2px solid ${style.accentColor}`,
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)'
  }}
>
  <source src="/videos/satellietgps.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

       </div>

       </div>

            <div style={{
  flex: '1 1 380px',
  maxWidth: '450px',
  background: 'rgba(248, 250, 252, 0.85)',
  padding: '25px',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  border: `3px solid ${style.accentColor}`
}}>
  <h2 style={{
    fontSize: '26px',
    color: style.accentColor,
    marginTop: 0,
    marginBottom: '15px',
    fontFamily: "'Comic Sans MS', sans-serif"
  }}>☀️ About Solar Storms</h2>

  <div style={{
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '15px'
  }}>
   <video
  style={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px'
  }}
  src="/videos/solarstorm.mp4"
  controls
  autoPlay
  loop
  muted
/>

  </div>

  <div
  style={{
    background: 'rgba(255, 255, 255, 0.6)',
    padding: '12px',
    borderRadius: '10px',
    marginBottom: '10px',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '15px',
    color: '#222'
  }}
>
  <p>
    Solar storms are powerful bursts of energy and particles released from the Sun.
    They can cause stunning auroras on Earth but also disrupt satellites, power grids,
    and communication systems. These storms occur when the Sun’s magnetic energy
    suddenly changes and ejects charged particles into space — sometimes reaching
    Earth’s atmosphere in just a few days.
  </p>

  {/* Credit link */}
  <div style={{ marginTop: '8px' }}>
    <a
      href="https://science.nasa.gov/sun/solar-storms-and-flares/" // replace with your desired source link
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#002366',
        fontStyle: 'italic',
        fontSize: '13px',
        textDecoration: 'underline'
      }}
    >
      Credit: NASA - Solar Storms and Flares
    </a>
  </div>
</div>

</div>

          </div>

          <div style={{
            background: 'rgba(248, 250, 252, 0.85)',
            padding: '30px',
            borderRadius: '25px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
            border: `4px solid ${style.accentColor}`,
            maxWidth: '900px',
            margin: '0 auto 30px'
          }}>
            <h2 style={{
              fontSize: '28px',
              color: style.accentColor,
              color: style.accentColor,
              textAlign: 'center',
              marginTop: 0,
              marginBottom: '20px',
              fontFamily: "'Comic Sans MS', sans-serif",
              fontFamily: "'Comic Sans MS', sans-serif"
            }}>🎬 Watch Now!</h2>
            <div style={{ position: 'relative' }}>
              <video
                style={{
                  width: '100%',
                  height: '450px',
                  borderRadius: '15px',
                  border: 'none'
                }}
                controls
                src={video.url}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {!showQuiz ? (
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <button
                onClick={() => setShowQuiz(true)}
                style={{
                  background: `linear-gradient(135deg, ${style.accentColor}, ${style.accentColor}dd)`,
                  color: '#000000',
                  border: 'none',
                  padding: '15px 40px',
                  borderRadius: '25px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)',
                  fontFamily: "'Comic Sans MS', sans-serif",
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                🎯 Take the Quiz!
              </button>
            </div>
          ) : (
            <div style={{
              background: 'rgba(248, 250, 252, 0.85)',
              padding: '25px',
              borderRadius: '20px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
              border: `3px solid ${style.accentColor}`,
              marginBottom: '30px',
              maxWidth: '800px',
              margin: '0 auto 30px'
            }}>
              <h2 style={{
                fontSize: '28px',
                color: style.accentColor,
                textAlign: 'center',
                marginTop: 0,
                marginBottom: '20px',
                fontFamily: "'Comic Sans MS', sans-serif"
              }}>🎯 Quiz Time!</h2>

              {!showResults ? (
                <>
                  {questions.map((q, qIdx) => (
                    <div key={qIdx} style={{
                      marginBottom: '20px',
                      padding: '18px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '12px',
                      border: `2px solid ${style.accentColor}`
                    }}>
                      <h3 style={{
                        fontSize: '17px',
                        color: '#333',
                        marginBottom: '12px',
                        fontFamily: "'Comic Sans MS', sans-serif"
                      }}>
                        Question {qIdx + 1}: {q.question}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {q.options.map((option, oIdx) => (
                          <label
                            key={oIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: '12px',
                              background: selectedAnswers[qIdx] === oIdx ? `${style.accentColor}33` : 'black',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              border: `2px solid ${selectedAnswers[qIdx] === oIdx ? style.accentColor : '#070707ff'}`,
                              transition: 'all 0.2s',
                              fontSize: '15px'
                            }}
                          >
                            <input
                              type="radio"
                              name={`question-${qIdx}`}
                              checked={selectedAnswers[qIdx] === oIdx}
                              onChange={() => handleAnswerSelect(qIdx, oIdx)}
                              style={{ marginRight: '10px', cursor: 'pointer' }}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                      onClick={handleSubmitQuiz}
                      disabled={Object.keys(selectedAnswers).length !== questions.length}
                      style={{
                        background: Object.keys(selectedAnswers).length === questions.length 
                          ? `linear-gradient(135deg, ${style.accentColor}, ${style.accentColor}dd)`
                          : 'rgba(14, 14, 14, 1)',
                        color: '#000000',
                        border: 'none',
                        padding: '14px 35px',
                        borderRadius: '20px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: Object.keys(selectedAnswers).length === questions.length ? 'pointer' : 'not-allowed',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        fontFamily: "'Comic Sans MS', sans-serif"
                      }}
                    >
                      Submit Quiz
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '80px',
                    marginBottom: '15px'
                  }}>
                    {score === questions.length ? '🎉' : score >= questions.length * 0.6 ? '😊' : '📚'}
                  </div>
                  <h3 style={{
                    fontSize: '26px',
                    color: style.accentColor,
                    marginBottom: '15px',
                    fontFamily: "'Comic Sans MS', sans-serif"
                  }}>
                    Your Score: {score} / {questions.length}
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    color: '#333',
                    marginBottom: '20px'
                  }}>
                    {score === questions.length 
                      ? "Perfect! You're a space weather expert! 🌟"
                      : score >= questions.length * 0.6
                      ? "Great job! Keep learning! 👍"
                      : "Keep watching and learning! You'll do better next time! 💪"}
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    {questions.map((q, qIdx) => (
                      <div key={qIdx} style={{
                        textAlign: 'left',
                        marginBottom: '15px',
                        padding: '15px',
                        background: selectedAnswers[qIdx] === q.correct ? '#d4edda' : '#f8d7da',
                        borderRadius: '8px',
                        border: `2px solid ${selectedAnswers[qIdx] === q.correct ? '#28a745' : '#dc3545'}`
                      }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '15px' }}>
                          {selectedAnswers[qIdx] === q.correct ? '✅' : '❌'} {q.question}
                        </p>
                        <p style={{ margin: '4px 0', fontSize: '13px' }}>
                          Your answer: {q.options[selectedAnswers[qIdx]]}
                        </p>
                        {selectedAnswers[qIdx] !== q.correct && (
                          <p style={{ margin: '4px 0', fontSize: '13px', color: '#28a745' }}>
                            Correct answer: {q.options[q.correct]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={resetQuiz}
                    style={{
                      background: `linear-gradient(135deg, ${style.accentColor}, ${style.accentColor}dd)`,
                      color: '#000000',
                      border: 'none',
                      padding: '14px 35px',
                      borderRadius: '20px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                      fontFamily: "'Comic Sans MS', sans-serif"
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
      </div>
    );
  };

  if (currentPage !== 'home') {
    const video = videoData.find(v => v.id === currentPage);
    if (video) {
      return <VideoPage video={video} />;
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.starField}>
        {stars.map(star => (
          <div
            key={star.id}
            style={{
              ...styles.star,
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s infinite`
            }}
          />
        ))}
      </div>

      <div style={styles.planet1}>🪐</div>
      <div style={styles.planet2}>🌙</div>
      <div style={styles.planet3}>🌎</div>

      <div style={styles.content}>
        <header style={styles.header}>
          <div style={styles.sunIcon}>☀️</div>
          <h1 style={styles.title}>TerraSol.com</h1>
          <p style={styles.subtitle}>Discover the Amazing World of Space Weather!</p>
        </header>

        <section style={styles.introduction}>
          <h2 style={styles.introTitle}>Meet Our Sun! 🌞</h2>
          <p style={styles.introText}>
            Did you know the Sun is like a giant ball of hot gas? It's so big that you could fit 
            1.3 million Earths inside it! The Sun doesn't just give us light and warmth - it also 
            creates something called "space weather." Just like Earth has rain, wind, and storms, 
            the Sun has solar flares, solar winds, and coronal mass ejections. These can send 
            powerful energy toward Earth and affect our technology. Let's explore this cosmic adventure!
          </p>
        </section>

        <div style={styles.spaceWeatherSection}>
          <div style={styles.spaceWeatherCard}>
            <h2 style={styles.spaceWeatherTitle}>🌌 What is Space Weather?</h2>
           <ul style={styles.spaceWeatherText}>
            <li>Space weather is like Earth's weather, but it happens in space!</li>
            <li>The Sun sends out particles and energy that travel through space.</li>
            <li>Solar events such as solar flares and coronal mass ejections can trigger geomagnetic storms and auroras.</li>
            <li>These storms can disrupt satellite operations, GPS signals, and radio communications on Earth.</li>
            <li>Power grids and pipelines may experience surges and malfunction during intense space weather events.</li>
            <li>Forecasting space weather helps provide warnings and allows protective actions to minimize impacts.</li>
            </ul>

            {/* Character Image in Bottom Right */}
  <img
    src="earthsunff.png" // put your image path here
    alt="Astronaut Character"
    style={styles.characterImage}
  />

          </div>
          
          <div style={styles.spaceWeatherVideo}>
            <div style={styles.featuredVideoWrapper}>
              <div style={styles.spaceCharacter}>🛸</div>
              <video
                style={styles.video}
                controls
                autoPlay
                loop
                muted
              >
                <source src="/videos/spaceweathervideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Credits */}
    <p style={{ color: '#87CEFA', fontSize: '0.85rem', marginTop: '5px', fontStyle: 'italic' }}>
      Credits: <a href="https://svs.gsfc.nasa.gov/12593/" target="_blank" rel="noopener noreferrer" style={{ color: '#87CEFA', textDecoration: 'underline' }}>SVS - NASA</a>
    </p>
              <p style={styles.videoCaption}>Understanding Space Weather</p>
            </div>
          </div>
        </div>

       <div style={styles.twoColumnContainer}>
  <div style={styles.videoCardWide}>
    <h3 style={styles.cardTitle}>🎬 Watch & Learn</h3>
    
    {videoData.map((video, index) => (
      <div key={index}>
        <div style={styles.videoDescription}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span style={{ fontSize: '32px' }}>{video.character}</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{video.title}</div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Duration: {video.duration}</div>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.6' }}>{video.description}</p>
        </div>
        <div 
          style={{ ...styles.videoWrapper, cursor: 'pointer' }}
          onClick={() => setCurrentPage(video.id)}
        >
          <div style={styles.videoCharacter}>{video.character}</div>
          <div style={{ position: 'relative' }}>
            <video
              style={styles.video}
              src={video.url}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '15px',
              transition: 'background 0.3s'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#2d1b4e',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
              }}>
                Click to Learn More! 🚀
              </div>
            </div>
          </div>
          <p style={styles.videoCaption}>{video.title}</p>
        </div>
        {index < videoData.length - 1 && <hr style={styles.videoDivider} />}
      </div>
    ))}
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
    <div style={styles.factsCard}>
      <h3 style={styles.cardTitle}>⭐ Quick Facts!</h3>
      <div style={styles.factsList}>
        {facts.map((fact, index) => (
          <div key={index} style={styles.factItem}>
            <div style={styles.factBubble}>
              {fact}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.funCorner}>
        <p style={styles.funText}>🚀 Did You Know?</p>
        <p style={styles.tipText}>
          Scientists who study space weather are called "heliophysicists"!
        </p>
      </div>
    </div>

    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      padding: '25px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      color: 'white'
    }}>
      <h3 style={{
        ...styles.cardTitle,
        margin: '0 0 20px 0',
        fontSize: '22px'
      }}>🌐 Space Weather Centers of Excellence</h3>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div
  style={{
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '15px',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center' // center image and text
  }}
>
  {/* Image at the top */}
  <img
    src="/astroclear.webp"  // put your webp file directly in the public folder
    alt="CLEAR Logo"
    style={{
      width: '120px',         // larger size
      height: '120px',        // square shape
      borderRadius: '12px',     // circular image
      marginBottom: '12px'
    }}
  />

  {/* Name below image */}
  <div
    style={{
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '10px',
      color: '#FFD700'
    }}
  >
    The Center for All-Clear Solar Energetic Particle Forecasts (CLEAR)
  </div>

  {/* Paragraph content */}
  <div style={{ fontSize: '14px', opacity: 0.9 }}>
    CLEAR focuses on improving the forecasting of high-energy particles from solar eruptions that pose dangers to astronauts and spacecraft. By developing better prediction methods, it helps reduce risks during solar energetic particle events.
   <div style={{ marginTop: '8px' }}>
      <a
        href="https://science.nasa.gov/clear/" // replace with actual URL
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#002366', fontStyle: 'italic', fontSize: '12px', textDecoration: 'underline' }}
      >
        Credit: NASA - Space Weather Centers of Excellence
      </a>
    </div>
  </div>
</div>


        <div
  style={{
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '15px',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center' // center image and text
  }}
>
  {/* Image at the top (square) */}
  <img
    src="/sparta.webp"  // put your SPARTA image in public folder
    alt="SPARTA Logo"
    style={{
      width: '120px',         // larger size
      height: '120px',        // square
      borderRadius: '12px',   // slightly rounded corners
      marginBottom: '12px'
    }}
  />

  {/* Title */}
  <div
    style={{
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '10px',
      color: '#FFD700'
    }}
  >
    The Space Weather Research and Technology Applications (SPARTA) Center
  </div>

  {/* Paragraph content */}
  <div style={{ fontSize: '14px', opacity: 0.9 }}>
    SPARTA aims to forecast irregularities in Earth's ionosphere that disrupt global navigation and satellite communications. It uses advanced computer models to enhance prediction and protect technologies that rely on reliable signals.
   <div style={{ marginTop: '8px' }}>
      <a
        href="https://science.nasa.gov/sparta/" // replace with actual URL
        target="_blank"
        rel="noopener noreferrer"
         style={{ color: '#002366', fontStyle: 'italic', fontSize: '12px', textDecoration: 'underline' }}
      >
       Credit: NASA - Space Weather Centers of Excellence
      </a>
    </div>
  </div>
</div>

       <div
  style={{
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '15px',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center' // center image and text
  }}
>
  {/* Image at the top (square) */}
  <img
    src="/sword.jpg" // place your SWORD image in the public folder
    alt="SWORD Logo"
    style={{
      width: '120px',
      height: '120px',
      borderRadius: '12px', // slightly rounded corners
      marginBottom: '12px'
    }}
  />

  {/* Title */}
  <div
    style={{
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '10px',
      color: '#FFD700'
    }}
  >
    The Space Weather Operational Readiness Development (SWORD) Center of Excellence
  </div>

  {/* Paragraph content */}
  <div style={{ fontSize: '14px', opacity: 0.9 }}>
    SWORD improves prediction of space weather effects in low Earth orbit, which can impact satellites, space stations, and the tracking of hazardous space debris. By connecting and refining forecasting models, it boosts the safety and resilience of critical space operations.

    {/* Credit link */}
    <div style={{ marginTop: '8px' }}>
      <a
        href="https://science.nasa.gov/sword/" // replace with actual URL
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#002366', fontStyle: 'italic', fontSize: '12px', textDecoration: 'underline' }}
      >
        Credit: NASA - Space Weather Centers of Excellence
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</div>

        <div style={styles.missionsSection}>
          <h2 style={styles.missionsSectionTitle}>🚀 Space Weather Missions</h2>
          <p style={styles.missionsSectionIntro}>
            Explore cutting-edge space missions that monitor the Sun and protect Earth from solar storms. 
          </p>
          
          <div style={styles.missionsGrid}>
            <div style={styles.missionCard}>
           {/* Image on top */}
           <img
               src="/stereo.png" // replace with your image path
               alt="NASA's STEREO spacecraft"
            style={styles.missionCardImage}
            />

                {/* Title */}
                 <h4 style={styles.missionCardTitle}>NASA's STEREO spacecraft</h4>

                <ul style={styles.missionCardDescription}>
  <li>
    <strong>Purpose:</strong> Track solar storms (CMEs) from the Sun to Earth in 3D and connect their origins to impacts.
  </li>
  <li>
    <strong>Reason:</strong> Earlier, it was hard to link disturbances at Earth to their sources on the Sun because of changes during their journey.
  </li>
  <li>
    <strong>Impact:</strong> STEREO's imagery greatly improved understanding and prediction of solar storms, helping protect satellites, power grids, and communications on Earth.
  </li>
</ul>

{/* Credits */}
<p style={{ color: '#003366', fontSize: '0.85rem', marginTop: '10px', fontStyle: 'italic' }}>
  Credits: <a href="https://svs.gsfc.nasa.gov/10809/" target="_blank" rel="noopener noreferrer" style={{ color: '#003366', textDecoration: 'underline' }}>NASA Spacecraft Track Solar Storms From Sun to Earth</a>
</p>


                  {/* Feature tags */}
                 <div style={styles.missionCardFeatures}>
                 <div style={styles.featureTag}>3D imaging of solar storms</div>
                 <div style={styles.featureTag}>Special space cameras</div>
                 <div style={styles.featureTag}>Space weather tracking</div>
              </div>
           </div>


            <div style={styles.missionCard}>
  {/* Image on top */}
  <img
    src="/CRO.png" // replace with your DSCOVR image path
    alt="Carruthers Geocorona Observatory (CGO)"
    style={styles.missionCardImage}
  />

  {/* Title */}
  <h4 style={styles.missionCardTitle}>Carruthers Geocorona Observatory (CGO)</h4>

  {/* Description */}
  <ul style={styles.missionCardDescription}>
  <li>
    <strong>Purpose:</strong> To examine Earth’s outermost atmospheric layer—the exosphere.
  </li>
  <li>
    <strong>Reason:</strong> Determines how space weather events affect satellite orbits and Earth’s upper atmosphere.
  </li>
  <li>
    <strong>Impact:</strong> Helps protect satellites and forecast atmospheric drag changes during storms.
  </li>
</ul>

{/* Credits */}
<p style={{ color: '#003366', fontSize: '0.85rem', marginTop: '10px', fontStyle: 'italic' }}>
  Credits: <a href="https://science.nasa.gov/heliophysics/focus-areas/space-weather/" target="_blank" rel="noopener noreferrer" style={{ color: '#003366', textDecoration: 'underline' }}>NASA Space Weather Website</a>
</p>

  {/* Feature tags */}
  <div style={styles.missionCardFeatures}>
    <div style={styles.featureTag}>Studies Earth's outer atmosphere (exosphere)</div>
    <div style={styles.featureTag}>Monitors space weather impact</div>
    <div style={styles.featureTag}>Protects satellites in orbit</div>
  </div>
</div>


            <div style={styles.missionCard}>
  {/* Image on top */}
  <img
    src="/Parker.png" // replace with your Parker Solar Probe image path
    alt="Parker Solar Probe"
    style={styles.missionCardImage}
  />

  {/* Title */}
  <h4 style={styles.missionCardTitle}>Parker Solar Probe</h4>

  {/* Description */}
  <ul style={styles.missionCardDescription}>
  <li>
    <strong>Purpose:</strong> Travels closer to the Sun than any previous spacecraft to study the corona and solar wind.
  </li>
  <li>
    <strong>Reason:</strong> Examines how solar wind is formed and why the solar corona is so much hotter than the Sun’s surface.
  </li>
  <li>
    <strong>Impact:</strong> Advances understanding of how solar storms and space weather originate, leading to better predictions and preparedness.
  </li>
</ul>

{/* Credits */}
<p style={{ color: '#003366', fontSize: '0.85rem', marginTop: '10px', fontStyle: 'italic' }}>
  Credits: <a href="https://science.nasa.gov/mission/parker-solar-probe/" target="_blank" rel="noopener noreferrer" style={{ color: '#003366', textDecoration: 'underline' }}>Parker Solar Probe - NASA</a>
</p>

  {/* Feature tags */}
  <div style={styles.missionCardFeatures}>
    <div style={styles.featureTag}>Record-Breaking Mission</div>
    <div style={styles.featureTag}>Extreme Heat Shield</div>
    <div style={styles.featureTag}>Solar Wind Data</div>
  </div>
</div>       
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #0a0e27 0%, #1a1b4b 50%, #2d1b4e 100%)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif",
    width: '100%'
  },
  starField: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  star: {
    position: 'absolute',
    background: 'white',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
  },
  planet1: {
    position: 'fixed',
    top: '8%',
    right: '5%',
    fontSize: '80px',
    animation: 'float 6s ease-in-out infinite',
    zIndex: 0,
  },
  planet2: {
    position: 'fixed',
    top: '60%',
    left: '3%',
    fontSize: '60px',
    animation: 'float 5s ease-in-out infinite',
    zIndex: 0,
  },
  planet3: {
    position: 'fixed',
    bottom: '15%',
    right: '8%',
    fontSize: '70px',
    animation: 'rotate 20s linear infinite',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '40px 20px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    backdropFilter: 'blur(10px)',
    border: '3px solid rgba(255, 215, 0, 0.5)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  sunIcon: {
    fontSize: '100px',
    animation: 'pulse 2s ease-in-out infinite',
    display: 'inline-block',
    filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))',
  },
  title: {
    fontSize: '72px',
    margin: '20px 0 10px 0',
    background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF69B4, #DDA0DD)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '24px',
    color: '#FFD700',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  introduction: {
    background: 'rgba(248, 250, 252, 0.85)',
    padding: '30px',
    borderRadius: '25px',
    marginBottom: '30px',
    border: '3px solid rgba(138, 43, 226, 0.5)',
    boxShadow: '0 8px 32px rgba(138, 43, 226, 0.3)',
    margin: '0 auto 30px'
  },
  introTitle: {
    fontSize: '36px',
    color: '#8B4513',
    color: '#8B4513',
    marginTop: 0,
    marginBottom: '20px',
  },
  introText: {
    fontSize: '20px',
    lineHeight: '1.8',
    color: '#000000',
    color: '#000000',
    margin: 0,
  },
  spaceWeatherSection: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  spaceWeatherCard: {
    flex: '1',
    minWidth: '300px',
    background: 'rgba(248, 250, 252, 0.85)',
    padding: '30px',
    borderRadius: '25px',
    position: 'relative', 
    border: '3px solid rgba(255, 140, 0, 0.6)',
    boxShadow: '0 8px 32px rgba(255, 140, 0, 0.3)',
  },
  spaceWeatherTitle: {
    fontSize: '36px',
    color: '#FF8C00',
    color: '#FF8C00',
    marginTop: 0,
    marginBottom: '20px',
  },
  spaceWeatherText: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#000000',
    color: '#000000',
    margin: 0,
  },
  spaceWeatherVideo: {
    flex: '1',
    minWidth: '300px',
  },

  characterImage: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    width: '100px', // adjust as needed
    opacity: 0.9,
    pointerEvents: 'none', // so clicks pass through
  },
  featuredVideoWrapper: {
    position: 'relative',
    background: 'linear-gradient(135deg, rgba(0, 255, 127, 0.2), rgba(0, 206, 209, 0.2))',
    padding: '20px',
    borderRadius: '25px',
    border: '3px solid rgba(0, 255, 127, 0.6)',
    boxShadow: '0 8px 32px rgba(0, 255, 127, 0.3)',
  },
  spaceCharacter: {
    position: 'absolute',
    top: '-10px',
    right: '20px',
    fontSize: '50px',
    zIndex: 10,
    animation: 'float 4s ease-in-out infinite',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
  },
  twoColumnContainer: {
    display: 'flex',
    gap: '25px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  videoCardWide: {
    flex: '1 1 650px',
    minWidth: '500px',
    background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.3), rgba(0, 191, 255, 0.3))',
    padding: '35px',
    borderRadius: '25px',
    border: '3px solid rgba(30, 144, 255, 0.6)',
    boxShadow: '0 8px 32px rgba(30, 144, 255, 0.3)',
  },
  factsCard: {
    flex: '0 0 320px',
    minWidth: '280px',
    maxWidth: '350px',
    height: 'fit-content',
    background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.3), rgba(255, 20, 147, 0.3))',
    padding: '25px',
    borderRadius: '25px',
    border: '3px solid rgba(255, 105, 180, 0.6)',
    boxShadow: '0 8px 32px rgba(255, 105, 180, 0.3)',
  },
  cardTitle: {
    fontSize: '32px',
    color: '#FFD700',
    marginTop: 0,
    marginBottom: '25px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  videoDescription: {
    fontSize: '18px',
    color: '#000000',
    color: '#000000',
    marginBottom: '15px',
    padding: '15px',
    background: 'rgba(248, 250, 252, 0.85)',
    borderRadius: '12px',
    borderLeft: '4px solid #FFD700',
  },
  videoWrapper: {
    marginBottom: '25px',
    position: 'relative',
  },
  videoCharacter: {
    position: 'absolute',
    top: '-15px',
    right: '-15px',
    fontSize: '45px',
    zIndex: 10,
    animation: 'float 4s ease-in-out infinite',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
  },
  video: {
    width: '100%',
    height: '350px',
    borderRadius: '15px',
    border: 'none',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
  },
  videoCaption: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginTop: '15px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  videoDivider: {
    border: 'none',
    borderTop: '2px solid rgba(255, 215, 0, 0.3)',
    margin: '30px 0',
  },
  factsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '25px',
  },
  factItem: {
    animation: 'float 3s ease-in-out infinite',
  },
  factBubble: {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '15px 20px',
    borderRadius: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2d1b4e',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  funCorner: {
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '20px',
    borderRadius: '20px',
    border: '2px solid rgba(255, 215, 0, 0.4)',
    backdropFilter: 'blur(10px)',
  },
  funText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#FFD700',
    margin: '0 0 10px 0',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  tipText: {
    fontSize: '16px',
    color: '#FFFFFF',
    margin: 0,
    textAlign: 'center',
    lineHeight: '1.6',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  missionsSection: {
    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.25), rgba(75, 0, 130, 0.25))',
    padding: '40px 35px',
    borderRadius: '25px',
    marginBottom: '40px',
    border: '3px solid rgba(138, 43, 226, 0.5)',
    boxShadow: '0 8px 32px rgba(138, 43, 226, 0.3)',
    maxWidth: '1100px',
    margin: '0 auto 40px'
  },
  missionsSectionTitle: {
    fontSize: '42px',
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: '20px',
    fontFamily: "'Comic Sans MS', sans-serif",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  },
  missionsSectionIntro: {
    fontSize: '18px',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '1.7',
    marginBottom: '30px',
    margin: '0 auto 30px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
  },
  missionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '25px',
  },
  missionCard: {
    background: 'rgba(248, 250, 252, 0.85)',
    padding: '25px',
    borderRadius: '18px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    border: '2px solid rgba(138, 43, 226, 0.3)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
 missionCardImage: {
    width: '150px',       // bigger square
    height: '150px',
    margin: '0 auto 15px auto', // centers horizontally
    objectFit: 'cover',   // fills square while maintaining aspect ratio
    borderRadius: '12px', // slightly rounded corners
    display: 'block',     // needed to center with margin auto
  },
  missionCardTitle: {
    fontSize: '22px',
    color: '#8B4513',
    marginTop: 0,
    marginBottom: '12px',
    textAlign: 'center',
    fontFamily: "'Comic Sans MS', sans-serif",
  },
  missionCardDescription: {
    fontSize: '15px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '18px',
    textAlign: 'center',
  },
  missionCardFeatures: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center',
  },
  featureTag: {
    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(123, 104, 238, 0.2))',
    padding: '8px 15px',
    borderRadius: '15px',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#4B0082',
    border: '2px solid rgba(138, 43, 226, 0.3)',
  },
};

export default StellarStories;