import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{ db.title }</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              {db.description}
            </p>
            <form onSubmit={(infos) => {
              infos.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                onChange={(infos) => { setName(infos.target.value); }}
                placeholder="Escreva o seu nome aqui"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                JOGAR
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/GabrielMNobre" />
    </QuizBackground>
  );
}
