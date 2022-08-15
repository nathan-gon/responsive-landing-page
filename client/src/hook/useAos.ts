import aos from 'aos';
import "aos/dist/aos.css";

export default function useAos (duration = 500, once = true) {
  aos.init({
    duration,
    once
  });

  return {

    aos
  };
}
