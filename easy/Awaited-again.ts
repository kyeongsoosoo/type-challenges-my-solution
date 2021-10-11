{
    type Awaited<K> = K extends Promise<infer R> ? R : null
}