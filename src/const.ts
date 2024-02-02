export const bgColor = `#0065a2`;

export const subjectImages = [
  { url: "/icml2024-1703.github.io/subject/0.jpeg" },
  { url: "/icml2024-1703.github.io/subject/1.jpeg" },
  { url: "/icml2024-1703.github.io/subject/2.jpeg" },
  { url: "/icml2024-1703.github.io/subject/3.jpeg" },
  { url: "/icml2024-1703.github.io/subject/4.jpeg" },
  { url: "/icml2024-1703.github.io/subject/5.jpeg" },
  { url: "/icml2024-1703.github.io/subject/6.jpeg" },
  { url: "/icml2024-1703.github.io/subject/7.jpeg" },
  { url: "/icml2024-1703.github.io/subject/8.jpeg" }
];

export const styleImages = [
  { url: "/icml2024-1703.github.io/style/0.jpeg" },
  { url: "/icml2024-1703.github.io/style/1.jpeg" },
  { url: "/icml2024-1703.github.io/style/2.jpeg" },
  { url: "/icml2024-1703.github.io/style/3.jpeg" },
  { url: "/icml2024-1703.github.io/style/4.jpeg" },
  { url: "/icml2024-1703.github.io/style/5.jpeg" },
  { url: "/icml2024-1703.github.io/style/6.jpeg" },
  { url: "/icml2024-1703.github.io/style/7.jpeg" }
];

export const msmsImages = [
  { url: "/icml2024-1703.github.io/msms/0.jpeg" },
  { url: "/icml2024-1703.github.io/msms/1.jpeg" },
  { url: "/icml2024-1703.github.io/msms/2.jpeg" },
  { url: "/icml2024-1703.github.io/msms/3.jpeg" },
  { url: "/icml2024-1703.github.io/msms/4.jpeg" }
];

export const multiImages = [
  { url: "/icml2024-1703.github.io/multicomposition/0.jpeg" },
  { url: "/icml2024-1703.github.io/multicomposition/1.jpeg" },
  { url: "/icml2024-1703.github.io/multicomposition/2.jpeg" },
  { url: "/icml2024-1703.github.io/multicomposition/3.jpeg" },
  { url: "/icml2024-1703.github.io/multicomposition/4.jpeg" },
  { url: "/icml2024-1703.github.io/multicomposition/5.jpeg" }
];

export const oneShotImages = [
  { url: "/icml2024-1703.github.io/oneshot/0.jpeg" },
  { url: "/icml2024-1703.github.io/oneshot/1.jpeg" },
  { url: "/icml2024-1703.github.io/oneshot/2.jpeg" },
  { url: "/icml2024-1703.github.io/oneshot/3.jpeg" }
];

export const tldr = `DCO enhances compositionality of personalized text-to-image models by preserving pretrained knowledge`;

export const abstract = `Text-to-image (T2I) diffusion models, when fine-tuned on few personal images, are able to generate visuals with high degree of consistency. 
  However, they still lacks in synthesizing images of different scenario or styles that are possible in the original pretrained models. 
  To address this, we propose to fine-tune T2I model by maximizing consistency to reference images, while penalizing the deviation from the pretrained model.
  We devise a novel training objective for T2I diffusion models that minimally fine-tunes the pretrained model to achieve consistency.
  Our method, dubbed ***Direct Consistency Optimization***, is as simple as regular diffusion loss, while significantly enhances the compositionality of personalized T2I models.
  Also, our approach induces a new sampling method that controls the tradeoff between image fidelity and prompt fidelity.
  Lastly, we emphasize the necessity of using a comprehensive caption for reference images to further enhance the image-text alignment.
  We show the efficacy of proposed method on the T2I personalization for subject, style, or both.
  In particular, our method results in superior Pareto frontier to the baselines.`;

export const subjectPersonalization = `DCO generates consistent images of a subject given by reference images, composed with textual prompts, *e.g.*, changing the outfits, backgrounds, attributes (top row) or converting into various styles (bottom row).`;

export const stylePersonalization = `DCO generates style-consistent images of various contents, given a single reference image.`;

export const mySubjectMyStyle = `The high compositionality of DCO enables merging independently trained subject \n\nand style personalized models without any distraction.`;

export const oneShotPersonalization = ` Our method enables subject consistent text-to-image generation with a single reference image.`;
