import React from 'react';
import {Button, Container} from 'reactstrap';

import './demo.min.css';

const buttons = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
    'icon',
    'white'
];

export default function Demo() {
    return (
        <Container fluid={true}>
            <section className={'demo'}>
                <h1>Demo</h1>

                <article>
                    {
                        buttons.map((button, index) => {
                            return <Button key={index} color={button}>{button}</Button>
                        })
                    }
                </article>

                <article>
                    <a href={'/'}>link</a>
                </article>

                <article>
                    <p>
                        Quisque vulputate suscipit lectus, ac vulputate purus sollicitudin et. Aenean vulputate tellus eu ipsum suscipit rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In interdum placerat efficitur. Mauris elit augue, ultrices a velit sed, scelerisque malesuada velit. Etiam tincidunt ultricies ligula vel posuere. Vivamus vestibulum turpis ex, ultricies elementum lorem cursus a. Proin ac mi a est lacinia molestie eget eget magna.

                        Nullam volutpat id est at efficitur. Aliquam erat volutpat. Quisque mollis eu enim ut aliquam. Cras odio erat, condimentum eu tortor et, porta malesuada justo. Sed hendrerit, nibh ut luctus cursus, nisi ex sollicitudin dolor, vitae dapibus felis augue vel justo...
                    </p>
                </article>
            </section>
        </Container>
    )
}