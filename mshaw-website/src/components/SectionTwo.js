import React from 'react';

const SectionTwo = () => {
    return (
        <section id="two" class="panel red section">
            <span class="line line-1"></span>
            <p>This line's animation will begin when it enters the viewport and finish when its top edge hits the top of the viewport, staying perfectly in sync with the scrollbar because it has <code>scrub:&nbsp;true</code></p>
        </section>
    )
}

export default SectionTwo