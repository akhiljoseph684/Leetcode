type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let time = null;
    
    return function(...args) {
        if (time) {
            clearTimeout(time);
        }
        
        time = setTimeout(() => {
            fn(...args);
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */