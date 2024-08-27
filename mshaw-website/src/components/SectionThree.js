import React from 'react';

const SectionThree = () => {
    return (
        <section id="three" class="panel orange section">
            <span class="line line-2"></span><p>This orange panel gets pinned when its top edge hits the top of the viewport, then the line's animation is linked with the scroll position until it has traveled 100% of the viewport's height (<code>end: "+=100%"</code>), then the orange panel is unpinned and normal scrolling resumes. Padding is added automatically to push the rest of the content down so that it catches up with the scroll when it unpins. You can set <code>pinSpacing: false</code> to prevent that if you prefer.</p>
        </section>
    )
}

export default SectionThree