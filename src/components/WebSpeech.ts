export const speakText = (text:string) => {
    if ('speechSynthesis' in window) {
      const textToSpeak = text;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = "de-DE"
      utterance.voice = speechSynthesis.getVoices()[0]; // Wähle eine Stimme aus
      utterance.rate = 0.5; // Geschwindigkeit (0.1 bis 10)
      utterance.volume = 1; // Lautstärke (0 bis 1)
      speechSynthesis.speak(utterance);
    } else {
      alert('Die Web Speech Synthesis API wird in diesem Browser nicht unterstützt.');
    }
}