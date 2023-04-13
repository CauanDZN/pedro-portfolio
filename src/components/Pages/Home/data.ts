import React from 'react';

import study_1 from '../../../assets/images/study_1.jpeg';
import study_2 from '../../../assets/images/study_2.jpeg';
import study_3 from '../../../assets/images/study_3.jpeg';

import monitoring_1 from '../../../assets/images/monitoring_1.png'
import monitoring_2 from '../../../assets/images/monitoring_2.png'
import monitoring_3 from '../../../assets/images/monitoring_3.png'

import lecturecdl_1 from '../../../assets/images/lecture-cdl-1.jpeg'
import lecturecdl_2 from '../../../assets/images/lecture-cdl-2.jpeg'
import lecturecdl_3 from '../../../assets/images/lecture-cdl-3.jpeg'

import lectureunifametro_1 from '../../../assets/images/lecture-unifametro-1.jpeg'
import lectureunifametro_2 from '../../../assets/images/lecture-unifametro-2.jpeg'
import lectureunifametro_3 from '../../../assets/images/lecture-unifametro-3.jpeg'


export const letSummary1 = [
  {
    infoTitle: 'Security Operation Center (SOC)',
    value: '90%'
  },
  {
    infoTitle: 'Cibersegurança',
    value: '90%'
  },

  {
    infoTitle: 'Redes de Computadores',
    value: '85%'
  },
];

export const letSummary2 = [
  {
    infoTitle: 'Comunicação',
    value: '90%'
  },

  {
    infoTitle: 'Proatividade',
    value: '90%'
  },
  
  {
    infoTitle: 'Liderança',
    value: '85%'
  },
];

export const letContact = [
  {
    text: 'Instagram',
    description: '@pd_yuri',
    image: 'Instagram',
    link: 'https://www.instagram.com/pd_yuri/',
    type: 'contact'
  },
  {
    text: 'WhatsApp',
    description: '(85) 9 9799-5248',
    image: 'Whatsapp',
    link: 'https://wa.me/+5585997995248',
    type: 'contact'
  },
  {
    text: 'LinkedIn',
    description: 'Pedro Yuri',
    image: 'Linkedin',
    link: 'https://www.linkedin.com/in/pedro-yuri-47391b232/',
    type: 'contact'
  },
]

export const Projetos = [
  {
    titulo: "Palestra na Faculdade CDL",
    key: 9891,
    descricao: "Ministrei uma palestra, falando sobre a Anatomia de Um Ataque.",
    items: [{
        src: lecturecdl_1,
        alt: "",
        titulo: "Sobre",
        texto: "",
        key: 3444
    },{
        src: lecturecdl_2,
        alt: "",
        titulo: "Sobre",
        texto: "",
        key: 53412
    }, {
      src: lecturecdl_3,
      alt: "",
      titulo: "Sobre",
      texto: "",
      key: 53412
    }, ]
  }, {
    titulo: "Palestra na Faculdade UNIFAMETRO",
    key: 9892,
    descricao: "Ministrei uma palestra, falando sobre a Anatomia de Um Ataque.",
    items: [{
        src: lectureunifametro_1,
        alt: "",
        titulo: "Sobre",
        texto: "",
        key: 3444
    },{
        src: lectureunifametro_2,
        alt: "",
        titulo: "Sobre",
        texto: "",
        key: 53412
    }, {
      src: lectureunifametro_3,
      alt: "",
      titulo: "Sobre",
      texto: "",
      key: 53412
    }, ]
  }, {
    titulo: "Monitorias",
    key: 44132,
    descricao: 'Ministrei várias monitorias ao longo do ano, de disciplinas das matérias do curso técnico.',
    items: [  {
        src: monitoring_1,
        alt: "",
        titulo: "Sobre",
        texto: "",
        key: 64532
    },{
        src: monitoring_2,
        alt: "",
        titulo: "Sobre",
        texto: "",
        key: 53412
    }, {
      src: monitoring_3,
      alt: "",
      titulo: "Sobre",
      texto: "",
      key: 53412
    }, 
  ]
  }, {
    titulo: "Endian Firewall: Criando VPN para projeto escolar",
    key: 9890,
    descricao: "Trabalhei em um projeto de criação de VPN em uma das aulas de Meios de Comunicação de Dados, usando Endian Firewall.",
    items: [{
        src: study_1,
        alt: "",
        titulo: "Sobre",
        texto: "",
        key: 3412411
    },]
  }, ];

export const letCourses = [
  {
    text: 'DFE - Digital Forensics Essentials',
    description: 'EC-Council',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/19m5k2PoCcVM6JmtSHr2M9BC6najAhQP_/view',
    type: 'cert'
  }, {
    text: 'EHE - Ethical Hacking Essentials',
    description: 'EC-Council',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1BlCSX_BK82yNXdJci2E8CunzexARt5j8/view',
    type: 'cert'
  }, {
    text: 'NDE - Network Defense Essentials;',
    description: 'EC-Council',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1yyc4OzvR9tjNaDXeAT3V2SjhvYBm948L/view',
    type: 'cert'
  }, {
    text: 'PEH - Practical Ethical Hacking',
    description: 'TCM Security',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1fKNzwwIn-hKBiBtE8SCMs0zVlZTYTZTA/view',
    type: 'cert'
  }, {
    text: 'Endian Firewall - Administração Profissional',
    description: 'Udemy',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/17pVp8AceASAUwATe-XLfMGZHM2hulPdG/view',
    type: 'cert'
  }, {
    text: 'Practical Malware Analysis & Triage',
    description: 'TCM Security',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1bz6MIvnPgOvIYSRjPfIDB-gipa_ag0S0/view',
    type: 'cert'
  }, {
    text: 'Hacker Ético Associado',
    description: 'IBSEC - Instituto Brasileiro de Cibersegurança',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1UExxchBkpt8sfsOazDEMKWq8lkUdEi2l/view',
    type: 'cert'
  }, 



]