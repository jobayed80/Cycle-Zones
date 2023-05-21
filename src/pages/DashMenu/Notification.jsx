import React, { useState } from 'react'
import HeaderMenu from './HeaderMenu'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';



const Notification = () => {




    return (    

        <div>
            <HeaderMenu></HeaderMenu>
            <section className='section bg-white min-h-[900px] relative'>

                <div className="container mx-auto">

                    <Accordion>
                    <AccordionItem > 
                        <AccordionItemHeading >
                            <AccordionItemButton >
                                Notification-1
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Notification-2
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque et molestias omnis nesciunt temporibus, pariatur recusandae ex? Laborum dolores fugit alias. Aliquid minus corporis quibusdam reprehenderit amet porro accusamus nesciunt expedita dolorum? Magni commodi accusamus facere? Magni totam illum ducimus quaerat asperiores incidunt saepe, dignissimos adipisci dicta sed facilis quia, tempore, rerum esse hic. Alias doloribus iusto ad perspiciatis? Sapiente amet dolorem dolore ducimus, impedit debitis perspiciatis enim omnis, vel, sint eum dignissimos nostrum beatae sequi voluptatem eaque iure. Ipsa dolores sed optio itaque sunt voluptatum dicta fugiat aliquam earum blanditiis, molestias assumenda corrupti placeat, cumque quaerat consectetur recusandae.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-3
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-4
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-5
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-6
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-7
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-8
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-9
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-10
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Notification-11
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate maiores fugiat esse, mollitia natus aspernatur sequi accusantium animi, in officia provident neque eaque voluptatum suscipit corrupti rem odio, quisquam quidem officiis vitae veniam reprehenderit. Repudiandae quia sunt cumque fuga iusto, temporibus molestias libero alias mollitia deleniti quibusdam earum quos! Quidem iusto officiis hic amet consequatur minus nemo labore, earum ratione quae autem dolorum sapiente quis? Voluptatem molestiae facere, nemo, ipsum est accusamus doloremque quod reiciendis et corrupti itaque illo aperiam temporibus. Laborum esse temporibus mollitia dignissimos quis, veniam impedit obcaecati nam soluta enim nostrum porro nobis exercitationem voluptatum dolores eius eum vel architecto aperiam reprehenderit doloribus accusamus possimus explicabo excepturi! Expedita omnis earum ducimus possimus, fugiat, ullam aperiam voluptatibus esse illum perferendis, fugit recusandae eligendi sint. Consequatur, alias atque vel fugit reprehenderit adipisci culpa vitae repellendus nulla placeat corporis natus optio, architecto est nam quod soluta consectetur eveniet in itaque porro. Veniam, architecto perferendis. Illo qui obcaecati animi veniam corrupti vero eaque quos blanditiis autem culpa placeat itaque distinctio quo fuga eos, iure debitis, illum ab ipsum. Sit ut ab hic rerum, error, temporibus id odit eveniet placeat vitae quasi, quis consectetur nulla qui commodi debitis ducimus? Neque, fugiat!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    </Accordion>
                </div>
            </section>
        </div>
    )
}

export default Notification