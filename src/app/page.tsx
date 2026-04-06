import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--accent)', borderTop: '1px solid var(--accent)' }}>
        <p>&copy; {new Date().getFullYear()} Abdul Fathah. All rights reserved.</p>
      </footer>
    </main>
  );
}
