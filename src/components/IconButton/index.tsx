import { Container } from './styles';
import arrowIcon from '../../assets/images/arrow.svg';
import { Book, LinkedinLogo, EnvelopeOpen, InstagramLogo, Phone, CircleWavyCheck, MicrophoneStage, CookingPot, Camera, PaintBrush, MusicNotes, WhatsappLogo } from 'phosphor-react';

interface IconButtonProps {
  text: string;
  description: string;
  image: string;
  link?: string | null;
  type: string;
}

export function IconButton({ text, description, image, link, type }: IconButtonProps) {
  return (
      <Container onClick={
        link? type === 'skill'? undefined : ()=>{window.open(link)} : undefined
      } type={type} link={link}>
        <div>
          {image === 'Email' && <EnvelopeOpen color="#5ac318" weight="light" size={60} />}
          {image === 'Phone' && <Phone color="#5ac318" weight="light" size={60} />}
          {image === 'Instagram' && <InstagramLogo color="#5ac318" weight="light" size={60} />}
          {image === 'Whatsapp' && <WhatsappLogo color="#5ac318" weight="light" size={60} />}
          {image === 'Cert' && <CircleWavyCheck color="#5ac318" weight="light" size={60} />}
          {image === 'Sing' && <MicrophoneStage color="#5ac318" weight="light" size={60} />}
          {image === 'Music' && <MusicNotes color="#5ac318" weight="light" size={60} />}
          {image === 'Cook' && <CookingPot color="#5ac318" weight="light" size={60} />}
          {image === 'Camera' && <Camera color="#5ac318" weight="light" size={60} />}          
          {image === 'Brush' && <PaintBrush color="#5ac318" weight="light" size={60} />}          
          {image === 'Linkedin' && <LinkedinLogo color="#5ac318" weight="light" size={60} />}
          {image === 'Book' && <Book color="#5ac318" weight="light" size={60} />}
          <div>
            <h3>{text}</h3>
            {description === ''? '' : <p>{description}</p>}
          </div>
          <img src={arrowIcon} alt="Arrow" />
        </div>
      </Container>
  )
}